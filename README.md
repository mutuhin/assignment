# Travel Memories Website

A beautiful, modern travel website for uploading and sharing your travel videos, photos, and stories. Built with a stunning UI inspired by Cursor's design language.

## Features

- **Photo Upload**: Upload and organize your travel photos with drag & drop
- **Video Sharing**: Share your adventure videos with smooth playback
- **Story Writing**: Write detailed travel journals and stories
- **Modern UI**: Beautiful glassmorphism design with smooth animations
- **Responsive**: Works perfectly on all devices
- **Dark Theme**: Eye-friendly dark interface with gradient accents
- **Interactive**: Hover effects, smooth transitions, and engaging animations

## Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Dropzone** - Drag and drop file uploads
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Uploading Content

1. **Photos**: Navigate to the Upload section and select "Photos" tab. Drag and drop your images or click to browse.

2. **Videos**: Switch to the "Videos" tab and upload your travel videos in MP4, MOV, AVI, or MKV format.

3. **Stories**: Use the "Stories" tab to write detailed travel journals and experiences.

4. **Add Details**: For each upload, you can add:
   - Location where the content was captured
   - Date of the experience
   - Tags for easy searching

### Viewing Memories

- Browse all your uploaded content in the "Memories" section
- Filter by content type (All, Photos, Videos, Stories)
- Click on any memory to view it in detail
- Interact with likes, comments, and sharing features

## Customization

### Styling

The website uses Tailwind CSS with custom color schemes and animations. You can customize:

- **Colors**: Edit the color palette in `tailwind.config.js`
- **Animations**: Modify or add new animations in the same file
- **Components**: Each component is in the `app/components/` directory

### Adding Features

- **Backend Integration**: Connect to your preferred backend service
- **Database**: Add persistent storage for uploads
- **Authentication**: Implement user accounts and login
- **Cloud Storage**: Integrate with AWS S3, Cloudinary, or similar services

## File Structure

```
travel-memories/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── UploadSection.tsx
│   │   └── MemoryGrid.tsx
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## License

This project is licensed under the MIT License.

