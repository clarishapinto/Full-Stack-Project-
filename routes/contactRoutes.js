const express = require('express');
const app = express();
const contactRoutes = require('./routes/contact'); // adjust path if needed
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
