
body {
  font-family: 'Roboto', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #4a00e0, #8e2de2);
  color: #333;
  overflow-x: hidden;
}

.container {
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.navbar {
  background: #4a00e0;
  padding: 15px;
  color: #fff;
  border-radius: 12px 0 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar h1 {
  margin: 0;
  font-size: 24px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  border-radius: 50%;
  border: 2px solid #fff;
}

.logout-btn {
  background: #ff4d4d;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: #cc3939;
}

.sidebar {
  width: 250px;
  background: #f8f9fa;
  padding: 20px 0;
  border-right: 1px solid #ddd;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 10px 0;
}

.sidebar a {
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.3s;
}

.sidebar a:hover {
  background: #e9ecef;
}

.sidebar .fas {
  color: #4a00e0;
}

.content {
  flex: 1;
  padding: 20px;
}

.login-box, .section {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.login-box {
  text-align: center;
}

.section {
  display: none;
}

h2 {
  font-size: 22px;
  color: #1a2b49;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  background: #4a00e0;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

button:hover {
  background: #3a00b0;
}

.action-btn {
  background: #28a745;
  margin-top: 15px;
}

.action-btn:hover {
  background: #218838;
}

.error {
  color: #dc3545;
  margin-top: 15px;
  font-size: 14px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.card {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
  text-align: center;
}

.card h3 {
  margin: 0 0 10px;
  color: #1a2b49;
  font-size: 16px;
}

.balance {
  font-size: 24px;
  color: #28a745;
  margin: 5px 0;
}

.currency {
  font-size: 14px;
  color: #666;
}

.ticker {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}

.security {
  font-size: 14px;
  color: #28a745;
  text-align: center;
  margin: 15px 0;
  font-style: italic;
}

.notice {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  font-size: 14px;
  color: #856404;
  margin: 20px 0;
  text-align: center;
}

.qr-code {
  margin-top: 15px;
  text-align: center;
}

.qr-code img {
  width: 140px;
  height: 140px;
  border: 2px solid #ddd;
  border-radius: 4px;
}

.warning {
  color: #dc3545;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  display: none;
  animation: pulse 1s infinite;
}

.transaction-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.transaction-list li {
  background: #f8f9fa;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}



