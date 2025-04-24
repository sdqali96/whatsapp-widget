document.addEventListener("DOMContentLoaded", function () {
    if (window.widgetLoaded) return;
    window.widgetLoaded = true;
    let widgetContainer = document.getElementById("whatsapp-widget-container");
    if (!widgetContainer) {
        widgetContainer = document.createElement("div");
        widgetContainer.id = "whatsapp-widget-container";
        document.body.appendChild(widgetContainer);
    }
    widgetContainer.innerHTML = `
        <div class="whatsapp-widget">
        <div class="chat-box">
            <div class="chat-header">
                <img src="https://thequranhub.co.uk/contents/assets/The%20Quran%20Hub%20-%20Emblem.png" alt="Logo" style="width:55px;height:55px;border-radius:8px;"><span class="blink_me"></span>
                <div>
                    <h4 style="margin:0;font-size:16px;color:#111;">The Quran Hub</h4>
                    <p style="margin:0;font-size:13px;color:#999;line-height: 2em;">Available</p>
                </div>
                <div class="close-button">&times;</div>
            </div>
            <div class="current-time"></div>
            <div class="chat-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
                <div class="chat-message">
                    <p>Salām 👋</p>
                    <p>How can we help you?</p>
                </div>
                <a style="text-decoration: none;" href="https://wa.me/thequranhub?text=Salam!%20I%20Can%20you%20help%20me%20with%20a%20query?" target="_blank" class="chat-button"><strong>Chat on WhatsApp</strong></a>
            </div>
        </div>
        <div class="whatsapp-button">
            <div class='notification-dot'></div>
            <i class="fa-brands fa-whatsapp fa-beat fa-2xl" style="color: #ffffff; --fa-animation-duration: 2.5s;"></i>
        </div>
    </div>`;
    const style = document.createElement("style");
    style.innerHTML = `
        #whatsapp-widget-container * {
            font-family: "Nunito", serif;
            font-optical-sizing: auto;
            -webkit-font-smoothing: antialiased;
        }
        #whatsapp-widget-container .whatsapp-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            cursor: pointer;
        }
        #whatsapp-widget-container .whatsapp-button {
            background-color: #25D366;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
            animation: buttonEntrance 0.5s ease-out 2s forwards;
        }
        #whatsapp-widget-container .whatsapp-button i {
            transition: transform 0.3s ease!important;
        }
        #whatsapp-widget-container .whatsapp-button:hover i {
            transform: scale(1.1);
        }
        #whatsapp-widget-container .notification-dot {
            height: 10px;
            width: 10px;
            background-color: #ff0000;
            border-radius: 50%;
            display: none;
            position: absolute;
            top: 5px;
            right: 5px;
        }
        #whatsapp-widget-container .chat-box {
            position: fixed;
            bottom: 110px;
            right: 2%;
            transform: translateY(20%); 
            width: min(90%, 375px);
            max-width: 375px; 
            background: white;
            border-radius: 15px;
            box-shadow: 0 12px 20px 2px rgba(0, 0, 0, 0.20);
            opacity: 0;
            transition: all 0.3s ease;
            visibility: hidden;
        }
        @media screen and (max-width: 480px) {
            #whatsapp-widget-container .chat-box {
                width: 90%;
                right: 5%;
            }
        }
        #whatsapp-widget-container .chat-box.open {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
        }
        #whatsapp-widget-container .chat-header {
            background: white;
            padding: 24px;
            border-radius: 12px 12px 0 0;
            display: flex;
            align-items: center;
            gap: 12px;
            position: relative;
            border-bottom: 1px solid #f5f5f5;
        }
        #whatsapp-widget-container .close-button {
            position: absolute;
            top: 12px;
            right: 12px;
            cursor: pointer;
            color: #999;
            font-size: 20px;
            font-weight: 700;
            line-height: 1;
            padding: 4px;
        }
        #whatsapp-widget-container .close-button:hover {
            color: #666;
        }
        #whatsapp-widget-container .blink_me {
            animation: blinker 2s linear infinite;
            width: 6px;
            height: 6px;
            display: inline-block;
            border: 1px solid #4ad504;
            background-color: #4ad504;
            border-radius: 100%;
            left: 70px;
            top: 70px;
            position: absolute;
        }
        #whatsapp-widget-container .chat-content {
            position: relative;
        }
        #whatsapp-widget-container .current-time {
            margin: 15px;
            text-align: center;
            font-size: 8pt;
            color: #c1c1c1;
        }
        #whatsapp-widget-container .typing-indicator {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 12px;
            background: #f5f6f6;
            -webkit-border-radius: 20px;
            -webkit-border-bottom-left-radius: 2px;
            -moz-border-radius: 20px;
            -moz-border-radius-bottomleft: 2px;
            border-radius: 20px;
            border-bottom-left-radius: 2px;
            width: max-content;
            margin-bottom: 16px;
            margin-left: 16px;
            animation: pulse 1.5s infinite ease-in-out;
        }
        #whatsapp-widget-container .typing-dot {
            width: 6px;
            height: 6px;
            vertical-align: middle;
            background-color: #999; 
            border-radius: 50%;
            animation: bounce 1.6s infinite ease-in-out;
        }
        #whatsapp-widget-container .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        #whatsapp-widget-container .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        #whatsapp-widget-container .chat-message {
            background: #f5f6f6;
            margin: 30px;
            margin-top: 20px;
            margin-left: 24px;
            display: inline-block;
            position: relative;
            width: 185px;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 1px 0px 0 rgb(233 233 233 / 20%), 0 1px 4px 0px rgb(63 63 63 / 20%);
            animation: scaleInFwdLeft 0.3s linear 0s 1 normal both;
        }
        #whatsapp-widget-container .chat-message:before {
            content: "";
            position: absolute;
            top: 0;
            left: -14px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 20px 16px 0 14px;
            border-color: #f5f6f6 transparent transparent transparent;
            border-radius: 10px;
            box-shadow: 0px -1px 0px 0px rgb(63 63 63 / 2%);
        }
        #whatsapp-widget-container .chat-message p {
            padding: 8pt;
            text-align: left;
            line-height: 1.5em;
            -webkit-margin-before: 0em;
            -webkit-margin-after: -0.5em;
            font-size: 1em;
        }
        #whatsapp-widget-container .chat-button {
            background: #25D366;
            color: white !important;
            padding: 12px 24px;
            border-radius: 25pt;
            text-decoration: none;
            display: block;
            font-weight: 500;
            font-size: 16px;
            transition: transform 0.2s ease;
            margin: 16px auto 18px;
            width: max-content;
            animation: slideInBottom 0.5s linear 1s 1 normal forwards;
        }
        #whatsapp-widget-container .chat-button:hover {
            transform: scale(1.05);
            -webkit-transition: all ease-in-out 150ms;
            -o-transition: all ease-in-out 150ms;
            transition: all ease-in-out 150ms;
            background: linear-gradient(180deg, rgb(93, 222, 140), transparent) #4ad876;
        }
        #whatsapp-widget-container .chat-button:open {
            transform: scale(1.05);
            background: linear-gradient(180deg, #28c961, transparent) #26c05d
        }
        @keyframes bounce {
            0% {
                transform: translateY(0px);
                background-color:#999;
            }
            28% {
                transform: translateY(-4px);
                background-color:#bbbbbb;
            }
            44% {
                transform: translateY(0px);
                background-color: #d7d7d7;
            }
        }
        @keyframes buttonEntrance {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes scaleInFwdLeft {
            0% {
                transform: scale(0);
                transform-origin: 0% 50%;
            }
            100% {
                transform: scale(1);
                transform-origin: 0% 50%;
            }
        }
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes slideInBottom {
            0% {
                opacity: 0;
                transform: translateY(250px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes blinker {
            50% {
                opacity: 0.5;
            }
        }
        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.8;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }`;
    document.head.appendChild(style);
    widget.init();
});
const widget = {
    init() {
        this.container = document.getElementById("whatsapp-widget-container");
        if (!this.container) {
            console.error("❌ WhatsApp Widget container not found!");
            return;
        }
        this.button = this.container.querySelector('.whatsapp-button');
        this.chatBox = this.container.querySelector('.chat-box');
        this.closeButton = this.container.querySelector('.close-button');
        this.message = this.container.querySelector('.chat-message');
        this.typingIndicator = this.container.querySelector('.typing-indicator');
        this.chatButton = this.container.querySelector('.chat-button');
        this.notificationDot = this.container.querySelector('.notification-dot');
        this.statusText = this.container.querySelector('.chat-header p'); // ✅ Get status text
        this.blinker = this.container.querySelector('.blink_me'); // ✅ Get the blinker
        this.currentTimeEl = this.container.querySelector('.current-time');
        if (!this.button || !this.chatBox) {
            console.error("WhatsApp Widget elements not found!");
            return;
        }
        this.originalTitle = document.title;
        this.newMessageReceived = false;
        this.button.style.display = "none"; // Hide button initially
        this.setupDelayedDisplay(); // Show button after 10 seconds or on scroll
        this.updateTime();
        setInterval(() => this.updateTime(), 60000);
        this.updateOnlineStatus(); // ✅ Auto-update on load
        setInterval(() => this.updateOnlineStatus(), 60000); // ⏰ Auto-check every 1 min
        this.setupEvents();
        this.setupExitIntent(); // ➡️ Add Exit Intent Trigger
    },
    setupDelayedDisplay() {
        this.buttonDisplayed = false;
        setTimeout(() => {
            if (!this.buttonDisplayed) {
                this.button.style.display = "flex";
                console.log("WhatsApp button displayed after 10 seconds.");
                this.buttonDisplayed = true;
                this.setupExitIntent(); // ✅ Activate immediately after button is shown
            }
        }, 10000); // ⌛ Single 10-second delay for button display
        window.addEventListener("scroll", () => {
            if (!this.buttonDisplayed) {
                const scrollPosition = window.scrollY + window.innerHeight;
                const pageHeight = document.documentElement.scrollHeight;
                if (scrollPosition >= pageHeight / 2) {
                    this.button.style.display = "flex";
                    this.buttonDisplayed = true;
                    console.log("WhatsApp button displayed upon scroll.");
                    this.setupExitIntent(); // ✅ Activate immediately upon scroll-trigger
                }
            }
        });
    },
    setupExitIntent() { /* 🖱️ Detect Mouse Moving to Top of Screen (with 2-day memory) */
        if (this.exitIntentListenerAdded) return; // Prevent multiple listeners
        this.exitIntentListenerAdded = true;
        this.exitTriggered = false; // Reset trigger on every page load
        const lastClosedTime = localStorage.getItem('chatClosedTime');
        const daysInMs = 2 * 24 * 60 * 60 * 1000; // ⏱️ Remember user closed widget for 2 days
        if (!lastClosedTime || Date.now() - lastClosedTime > daysInMs) {
            document.addEventListener('mousemove', this.exitIntentHandler);
        }
    },
    exitIntentHandler: (e) => {
        const narrowAreaPx = 2; // 🖥️ Narrow trigger area (top 2 pixels)
        if (e.clientY <= narrowAreaPx && !widget.chatBox.classList.contains('open') && !widget.exitTriggered) {
            widget.exitTriggered = true;
            widget.openChat();
            document.removeEventListener('mousemove', widget.exitIntentHandler); // ✅ Clean-up listener
            console.log("WhatsApp widget opened via narrowed exit-intent area.");
        }
    },    
    updateTime() { // 🕰️ Explicitly show user's local time
        if (!this.currentTimeEl) return;
        const now = new Date();
        this.currentTimeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    },
    updateOnlineStatus() { /* 🕒 AUTO UPDATE ONLINE/OFFLINE STATUS BASED ON UK TIME */
        if (!this.statusText || !this.blinker || !this.currentTimeEl) {
            this.statusText = this.container.querySelector('.chat-header p');
            this.blinker = this.container.querySelector('.blink_me');
            this.currentTimeEl = this.container.querySelector('.current-time');
            if (!this.statusText || !this.blinker || !this.currentTimeEl) {
                console.error("Status or Time elements not found.");
                return;
            }
        }
        const currentStatus = this.statusText.textContent.trim().toLowerCase();
        if (["offline", "unavailable"].includes(currentStatus)) { // Respect manual overrides ("offline" or "unavailable")
            this.blinker.style.backgroundColor = "transparent"; // ⭕ Make it a hollow ring
            this.blinker.style.border = "1px solid #ff0000"; // ⭕ Red ring
            this.blinker.style.animation = "pulse 1.5s infinite ease-in-out";
            return;
        }
        const displayedLocalTime = this.currentTimeEl.textContent; // Use displayed local time from updateTime()
        if (!displayedLocalTime) return;
        const [localHour, localMinute] = displayedLocalTime.split(':').map(Number);
        const nowLocal = new Date();
        nowLocal.setHours(localHour, localMinute, 0, 0);
        let ukHour;
        if (Intl.DateTimeFormat().resolvedOptions().timeZone === "Europe/London") { // ✅ Only convert to UK time if user's timezone is not already UK-based
            ukHour = localHour;
        } else {
            const ukTime = nowLocal.toLocaleString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }); // Internal conversion (not displayed in HTML)
            [ukHour] = ukTime.split(':').map(Number);
        }
        if (ukHour < 9 || ukHour >= 21) {
            if (currentStatus !== "unavailable") { 
                this.statusText.textContent = "Unavailable";
                this.blinker.style.backgroundColor = "transparent";
                this.blinker.style.border = "1px solid #ff0000";
                this.blinker.style.animation = "pulse 1.5s infinite ease-in-out";
            }
        }
    },    
    setupEvents() {
        if (!this.button) {
            console.error("WhatsApp button not found!");
            return;
        }
        this.button.addEventListener('click', (e) => this.toggleChat(e));
        if (this.closeButton) {
            this.closeButton.addEventListener('click', (e) => this.closeChat(e));
        } else {
            console.warn("Close button not found in widget.");
        }
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
    },
    openChat() {
        this.chatBox.classList.add('open');
        this.startAnimationSequence();
    },
    toggleChat(e) {
        if (e) e.preventDefault();
        this.chatBox.classList.toggle('open');
        if (this.chatBox.classList.contains('open')) {
            this.startAnimationSequence();
        } else {
            this.resetTitleNotification();
        }
    },
    closeChat(e) {
        if (e) e.stopPropagation();
        this.chatBox.classList.remove('open');
        this.resetTitleNotification();
        localStorage.setItem('chatClosedTime', Date.now()); // ✅ Save timestamp when closed
    },
    startAnimationSequence() {
        this.typingIndicatorRunning = false;
        this.typingIndicator.style.display = 'flex';
        this.typingIndicator.style.animation = 'none';
        requestAnimationFrame(() => {
            this.typingIndicator.style.animation = ''; // Restore animation after next frame
        });
        this.message.style.display = 'none';
        this.chatButton.style.opacity = '0';
        setTimeout(() => {
            this.typingIndicator.style.display = 'none';
            this.message.style.display = 'block';
            this.chatButton.style.opacity = '1';
            this.triggerTitleNotification();
            this.typingIndicatorRunning = false;
        }, 1500);
    },    
    handleOutsideClick(e) {
        if (!e.target.closest('.whatsapp-widget') && this.chatBox.classList.contains('open')) {
            this.chatBox.classList.remove('open');
            this.resetTitleNotification();
        }
    },
    triggerTitleNotification() {
        if (!this.newMessageReceived) {
            this.newMessageReceived = true;
            document.title = `(1) New message - ${this.originalTitle}`;
            this.notificationDot.style.display = 'block';
            this.notificationDot.style.animation = 'fadeIn 0.4s ease-in-out forwards';
            setTimeout(() => {
                this.notificationDot.style.animation = 'pulse 1.8s infinite ease-in-out';
            }, 400); // Starts pulsing after fade-in completes
            this.playNotificationSound();
        }
    },
    resetTitleNotification() {
        this.newMessageReceived = false;
        document.title = this.originalTitle;
        this.notificationDot.style.animation = 'fadeOut 0.4s ease-in-out forwards';
        setTimeout(() => {
            this.notificationDot.style.display = 'none';
        }, 400); // Hide after fade-out completes
    },
    playNotificationSound() {
        const sound = new Audio("https://thequranhub.co.uk/contents/assets/notification-sound.wav");
        sound.play().catch(error => console.log("Notification sound blocked by browser:", error));
    }    
};