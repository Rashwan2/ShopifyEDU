# Hero Banner Section

A flexible, reusable hero section with comprehensive customization options for creating professional-looking banners without code changes.

## 🚀 Features

### Media Options
- **Image Support**: Upload any hero image with automatic responsive sizing
- **Video Support**: Embed YouTube or Vimeo videos with autoplay and loop
- **Dark Overlay**: Optional overlay with adjustable opacity (0-100%)

### Content Management
- **Up to 3 Text Blocks**: Add multiple text elements with different styles
- **Up to 2 CTA Buttons**: Create call-to-action buttons with custom URLs
- **Flexible Layout**: Content can be displayed with or without a background box
- **Vertical Centering**: All content is automatically vertically centered

### Customization Options

#### Content Alignment
- **Left**: Content aligned to the left side
- **Center**: Content centered horizontally
- **Right**: Content aligned to the right side

#### Text Styling
- **Text Color**: Choose between Black (#0C0C0C) or White
- **Drop Shadow**: Optional text shadow for better readability
- **Text Sizes**: Large, Medium, or Small text styles
- **Heading Tags**: H1, H2, H3, or Paragraph

#### Call-to-Action Buttons
- **Border Color**: Black or White border
- **Text Color**: Black or White text
- **Button Styles**: Primary or Secondary
- **Hover Effects**: Smooth transitions and visual feedback

#### Content Box
- **Box Color**: Black or White background
- **Opacity**: Adjustable from 0-100%
- **Hide Option**: Display content without background box

## 📁 Files Created

1. **`sections/hero-banner.liquid`** - Main section file with Liquid template and schema
2. **`assets/hero-banner.css`** - Comprehensive styling with responsive design
3. **`templates/index.hero.json`** - Example template showing how to use the section
4. **`README-HERO-BANNER.md`** - This documentation file

## 🎯 Usage Instructions

### 1. Add to Theme
The hero banner section is now available in your theme editor under "Sections".

### 2. Configure Media
- **For Images**: Upload a hero image (recommended: 1920x1080px)
- **For Videos**: Paste YouTube or Vimeo URL
- **Overlay**: Enable dark overlay and adjust opacity as needed

### 3. Set Content Alignment
Choose how content should be positioned:
- **Left**: For left-aligned content
- **Center**: For centered content
- **Right**: For right-aligned content

### 4. Add Content Blocks
- **Text Blocks**: Add up to 3 text elements
  - Choose heading tag (H1, H2, H3, or P)
  - Select text style (Large, Medium, Small)
  - Enter your text content
- **CTA Blocks**: Add up to 2 call-to-action buttons
  - Enter button text
  - Set button URL
  - Choose button style

### 5. Customize Styling
- **Content Box**: Enable/disable background box
- **Box Color**: Choose Black or White
- **Box Opacity**: Adjust transparency (0-100%)
- **Text Color**: Choose Black or White
- **Text Shadow**: Enable drop shadow for better readability
- **CTA Colors**: Set border and text colors for buttons

## 🎨 Design Examples

### Fashion Collection Banner
```
Media: Hero image with model
Content Alignment: Right
Content Box: Black, 85% opacity
Text: White with drop shadow
CTAs: White border, white text
```

### Product Launch Banner
```
Media: Video background
Content Alignment: Center
Content Box: Disabled
Text: White with drop shadow
CTAs: White border, white text
```

### Minimalist Banner
```
Media: Hero image
Content Alignment: Left
Content Box: White, 90% opacity
Text: Black, no shadow
CTAs: Black border, black text
```

## 📱 Responsive Design

The hero banner is fully responsive and includes:
- **Mobile Optimization**: Adjusted text sizes and spacing
- **Tablet Support**: Optimized layouts for medium screens
- **Desktop Enhancement**: Full-featured experience on large screens
- **RTL Support**: Right-to-left language compatibility

## 🔧 Technical Details

### CSS Custom Properties
The section uses CSS custom properties for dynamic styling:
- `--text-color`: Text color
- `--cta-border-color`: CTA border color
- `--cta-text-color`: CTA text color
- `--box-color`: Content box color
- `--box-opacity`: Content box opacity
- `--overlay-opacity`: Media overlay opacity

### Video Embedding
- **YouTube**: Automatic ID extraction and embed
- **Vimeo**: Automatic ID extraction and embed
- **Autoplay**: Videos play automatically (muted)
- **Loop**: Videos loop continuously
- **Responsive**: Videos scale properly on all devices

### Accessibility Features
- **Keyboard Navigation**: CTA buttons are keyboard accessible
- **Focus States**: Clear focus indicators
- **Alt Text**: Images include proper alt attributes
- **Semantic HTML**: Proper heading hierarchy

## 🚀 Getting Started

1. **Add Section**: In theme editor, add "Hero Banner" section
2. **Upload Media**: Add your hero image or video URL
3. **Configure Content**: Set alignment and add text/CTA blocks
4. **Customize Styling**: Adjust colors, opacity, and effects
5. **Preview**: Test on different devices and screen sizes

## 💡 Tips for Best Results

### Image Recommendations
- **Resolution**: 1920x1080px or higher
- **Format**: JPG or PNG
- **File Size**: Optimize for web (under 500KB)
- **Content**: Ensure text readability over image

### Video Recommendations
- **Duration**: 10-30 seconds for best impact
- **Quality**: HD quality (1080p)
- **Content**: Avoid text-heavy videos
- **Audio**: Not required (autoplay is muted)

### Content Guidelines
- **Text Length**: Keep text concise and impactful
- **CTA Text**: Use action-oriented language
- **Hierarchy**: Use different text sizes for visual hierarchy
- **Contrast**: Ensure good contrast between text and background

## 🔄 Updates and Maintenance

The hero banner section is designed to be:
- **Future-Proof**: Uses modern CSS and Liquid features
- **Maintainable**: Clean, well-documented code
- **Extensible**: Easy to add new features
- **Compatible**: Works with all Shopify themes

## 📞 Support

For questions or issues with the hero banner section:
1. Check this documentation first
2. Review the code comments in the files
3. Test with different content and settings
4. Ensure all required fields are filled

---

**Version**: 1.0  
**Compatibility**: Shopify 2.0+ themes
