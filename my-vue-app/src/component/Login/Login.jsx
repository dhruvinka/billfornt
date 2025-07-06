import React, { useContext, useState } from 'react';
import './Login.css';
import toast from 'react-hot-toast';
import { login } from '../../Service/AuthService';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/Appcontext.jsx';

function Login() {
  const { setAuthdata } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(data);

      console.log("Login response data:", res.data); // Debug log

      if (res.status === 200) {

        const { token, role } = res.data;

        // Save correctly
        localStorage.setItem('role', res.data.role);
        localStorage.setItem('token', res.data.token);

        // Update global context
        setAuthdata(res.data.token, res.data.role);

        toast.success("Login successful");
        navigate('/dashboard');
      } else {
        toast.error("Login failed: " + res.statusText);
      }
    } catch (error) {
      toast.error("Email or password is incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light d-flex align-items-center justify-center vh-100 login-background">
      <div className="card shadow p-4 w-100" style={{ maxWidth: '480px' }}>
        <div className="card-body">
          <div className="text-center">
            <h1 className="card-title">Sign in</h1>
            <p className="card-text text-muted">Sign in to your account</p>
          </div>
          <div className="text-center mb-4">
            <form onSubmit={onSubmitHandler}>
              <div className="mt-4">
                <label htmlFor="email" className="form-label text-muted">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label text-muted">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={data.password}
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
