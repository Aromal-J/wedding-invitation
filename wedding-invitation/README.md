# 💒 Hindu Wedding Invitation Website

A beautiful, elegant single-page wedding invitation website built with React (Preact) and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Perfect display on all devices (mobile-first approach)
- **Elegant Aesthetics**: Royal, minimal, and classy design with traditional Indian elements
- **Smooth Animations**: Subtle fade-in effects and smooth scrolling
- **Live Countdown Timer**: Real-time countdown to the wedding day
- **Interactive Gallery**: Image gallery with hover effects
- **RSVP Integration**: Direct WhatsApp RSVP functionality
- **Customizable**: Easy to modify wedding details

## 🎨 Design Highlights

- **Color Scheme**: 
  - Cream background (#FAF3E0)
  - Gold accents (#C6A75E)
  - Brown text (#3E2C23)
- **Typography**: 
  - Playfair Display (serif)
  - Cormorant Garamond (serif)
- **Elements**: Floral decorations, rounded edges, soft shadows

## 📦 Tech Stack

- **Framework**: Preact (React alternative)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd wedding-invitation
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Customization

### Update Wedding Details

Edit the file: `src/data/weddingDetails.js`

```javascript
export const weddingDetails = {
  couple: {
    groom: {
      name: "Your Groom Name",
      fatherName: "Father's Name",
      motherName: "Mother's Name",
    },
    bride: {
      name: "Your Bride Name",
      fatherName: "Father's Name",
      motherName: "Mother's Name",
    },
  },
  
  weddingDate: "2026-12-12T10:00:00", // ISO format for countdown
  weddingDateDisplay: "12 December 2026",
  weddingDay: "Saturday",
  
  ceremony: {
    // Update ceremony details
  },
  
  reception: {
    // Update reception details
  },
  
  rsvp: {
    whatsappNumber: "919876543210", // Format: countrycode + number
  },
  
  gallery: {
    images: [
      // Add your image URLs
    ],
  },
};
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      cream: '#FAF3E0',  // Change background color
      gold: '#C6A75E',   // Change accent color
      brown: '#3E2C23',  // Change text color
    },
  },
}
```

### Add Real Images

1. Place images in the `public` folder
2. Update image URLs in `src/data/weddingDetails.js`:
```javascript
gallery: {
  images: [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    // ...
  ],
}
```

### Update WhatsApp RSVP

Replace the phone number in `weddingDetails.js`:
```javascript
rsvp: {
  whatsappNumber: "919876543210", // Your WhatsApp number with country code
}
```

## 📱 Sections

1. **Hero Section**: Names and wedding date with call-to-action
2. **Couple Section**: Bride and groom details with parent names
3. **Ceremony Details**: Wedding ceremony information
4. **Reception Details**: Reception information
5. **Countdown Timer**: Live countdown to wedding day
6. **Gallery**: Photo gallery
7. **RSVP**: WhatsApp contact button
8. **Footer**: Thank you message

## 🎯 Component Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── CoupleSection.jsx
│   ├── EventCard.jsx
│   ├── Countdown.jsx
│   ├── Gallery.jsx
│   ├── RSVP.jsx
│   └── Footer.jsx
├── data/
│   └── weddingDetails.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🌐 Deployment

You can deploy this website to:

- **Vercel**: `npm i -g vercel` then `vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Firebase Hosting**: `firebase deploy`

## 📝 License

This project is open source and available for personal use.

## 💝 Credits

Created with ❤️ for celebrating special moments.

---

**Note**: Remember to update all personal details before deploying!