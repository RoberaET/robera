# 🌐 Modern Minimalist Portfolio

A stunning, modern portfolio website built with Next.js 15, React, and TypeScript. Featuring a clean minimalist design with smooth animations, glassmorphism effects, and a custom color scheme optimized for showcasing professional work.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Modern Design**: Clean, minimalist interface with custom color palette (#F0EDCC background, #02343F foreground)
- **Glassmorphism UI**: Translucent navbar and card components with backdrop blur effects
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Smooth Animations**: Framer Motion powered animations for enhanced user experience
- **Dark Mode Support**: Built-in theme provider for light/dark mode switching
- **Component Library**: Complete shadcn/ui component library integration
- **Type Safe**: Full TypeScript support for robust development
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/RoberaET/robera.git
   cd robera
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio in action!

## 📁 Project Structure

```
modern-minimalist-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and custom CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # shadcn/ui component library
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact form
│   ├── experience.tsx    # Work experience timeline
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── passions.tsx      # Passions/interests section
│   ├── projects.tsx      # Projects showcase
│   └── skills.tsx        # Skills display
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🎨 Customization

### Color Scheme

The portfolio uses a custom color palette defined in `app/globals.css`:

```css
--background: #f0edcc;
--foreground: #02343f;
```

### Content Updates

Update your personal information in the following components:

- **Hero Section**: `components/hero.tsx` - Name, role, and introduction
- **About**: `components/about.tsx` - Bio and core values
- **Skills**: `components/skills.tsx` - Technical skills and proficiencies
- **Experience**: `components/experience.tsx` - Work history
- **Projects**: `components/projects.tsx` - Portfolio projects
- **Contact**: `components/contact.tsx` - Contact information

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon set

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RoberaET/robera)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**ROBERA**

- GitHub: [@RoberaET](https://github.com/RoberaET)
- Email: robera4553@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/RoberaET/robera/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

<p align="center">Made with ❤️ by ROBERA</p>
