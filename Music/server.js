// server.js - Example Node.js/Express server configuration
// Run with: node server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware for proper headers
app.use((req, res, next) => {
    // Content Security Policy (replaces X-Frame-Options)
    res.setHeader('Content-Security-Policy', 
        "default-src 'self'; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; " +
        "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; " +
        "img-src 'self' data:; " +
        "script-src 'self' 'unsafe-inline'; " +
        "frame-ancestors 'self';"
    );
    
    // Additional security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Remove X-Frame-Options if it exists (CSP takes precedence)
    res.removeHeader('X-Frame-Options');
    
    next();
});

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Final.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🎵 MSW Music Website running on http://localhost:${PORT}`);
    console.log('✅ Security headers configured properly');
    console.log('✅ Content-Security-Policy header set (replaces X-Frame-Options)');
});

// Example package.json dependencies needed:
/*
{
  "name": "msw-music-website",
  "version": "1.0.0",
  "description": "Music Streaming Website with proper security headers",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
*/
