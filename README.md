# 📱 WhatsApp Chatbot

A lightweight, fully customisable WhatsApp chat widget built in vanilla JavaScript. This widget adds a professional, animated WhatsApp chat button to any webpage, enabling visitors to easily initiate a conversation with your business via WhatsApp.

## ✨ Features
- Floating WhatsApp chat button with animated pulse and delayed reveal
- Animated chat window with custom welcome message and typing indicator
- Local time and availability status (auto-updates based on UK time)
- Exit intent trigger for desktop users
- Notification pulse, message preview, and custom chat header
- Responsive and mobile-friendly design
- Fully customisable: colours, icons, links, messages

---

## 🛠 How to Use

### 1. **Add the Container Div to Your HTML**

Paste this anywhere in the `<body>` of your HTML file:

```html
<div id="whatsapp-widget-container"></div>
```

### 2. **Include the Script**

Place this just before your closing `</body>` tag:

```html
<script src="whatsapp-widget.js"></script>
```

---

## 🔧 Customisation

To use your own WhatsApp number and customise the message, **edit the `href` value** inside the script:

```js
<a href="https://wa.me/your-number?text=Your%20custom%20message" target="_blank">
```

- Replace `your-number` with your WhatsApp number (e.g. `447912345678` for UK format).
- Replace the message after `text=` as desired.

---

## ✅ Requirements
- No external libraries required (pure JavaScript)
- FontAwesome for WhatsApp icon (optional, or replace with your own SVG)
- Hosted logo (used in chat header) — replace the logo URL if needed
- Ensure HTTPS is used for production environments

---

## 💡 Notes
- The widget displays after a 10-second delay or on scroll past half the page.
- A subtle exit-intent popup is also triggered when the user moves the mouse to the top edge (desktop only).
- Includes built-in light/dark UI components and animation styles.

---

## 📄 License

This widget is free to use under the MIT License. Attribution to **The Quran Hub** is appreciated but not required.

---

Let me know if you'd like me to create this as an actual `README.md` file for your repo or assist with enhancements!
