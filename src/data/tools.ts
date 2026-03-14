export type Category =
  | 'Design & Visual'
  | 'Video Creation'
  | 'Writing'
  | 'Audio'
  | 'Presentations'
  | 'Coding'
  | 'Research'
  | 'Utilities & Productivity';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  url: string;
  logo: string;
  featured?: boolean;
}

export const initialTools: Tool[] = [
  { id: '1', name: 'Midjourney', description: 'Text-to-image AI that creates stunning artwork and illustrations from written descriptions', category: 'Design & Visual', url: 'https://www.midjourney.com', logo: 'https://logo.clearbit.com/midjourney.com', featured: true },
  { id: '2', name: 'Supercolorpalette.com', description: 'AI color palette generator that creates harmonious color schemes for design projects', category: 'Design & Visual', url: 'https://supercolorpalette.com', logo: 'https://logo.clearbit.com/supercolorpalette.com' },
  { id: '3', name: 'Brandbird.app', description: 'Creates professional-looking screenshots and graphics for social media and marketing materials', category: 'Design & Visual', url: 'https://brandbird.app', logo: 'https://logo.clearbit.com/brandbird.app' },
  { id: '4', name: 'Itemes.design', description: 'AI-powered icon and design asset generator for web and mobile applications', category: 'Design & Visual', url: 'https://itemes.design', logo: 'https://logo.clearbit.com/itemes.design' },
  { id: '5', name: 'recraft.ai', description: 'AI image generation and editing platform designed specifically for designers, creatives, and teams', category: 'Design & Visual', url: 'https://recraft.ai', logo: 'https://logo.clearbit.com/recraft.ai' },
  { id: '6', name: 'Canva AI', description: 'Design platform with AI features for image generation, background removal, and text effects', category: 'Design & Visual', url: 'https://www.canva.com', logo: 'https://logo.clearbit.com/canva.com', featured: true },
  { id: '7', name: 'Adobe Firefly', description: 'AI image generator integrated into Adobe products for creative design work', category: 'Design & Visual', url: 'https://firefly.adobe.com', logo: 'https://logo.clearbit.com/adobe.com' },
  { id: '8', name: 'Scribble Diffusion', description: 'Turns rough sketches into refined images using AI image generation', category: 'Design & Visual', url: 'https://scribblediffusion.com', logo: 'https://logo.clearbit.com/scribblediffusion.com' },
  { id: '9', name: 'Remove.bg', description: 'Automatically removes backgrounds from images in seconds using AI detection', category: 'Design & Visual', url: 'https://www.remove.bg', logo: 'https://logo.clearbit.com/remove.bg' },
  { id: '10', name: 'Vizard.ai', description: 'Transforms long videos into short, shareable social media clips using AI video editing', category: 'Video Creation', url: 'https://vizard.ai', logo: 'https://logo.clearbit.com/vizard.ai' },
  { id: '11', name: 'Runway ML', description: 'AI video editing suite with tools for background removal, motion tracking, and special effects', category: 'Video Creation', url: 'https://runwayml.com', logo: 'https://logo.clearbit.com/runwayml.com', featured: true },
  { id: '12', name: 'Magichour.ai', description: 'AI video editing tool that automatically creates polished videos from raw footage', category: 'Video Creation', url: 'https://magichour.ai', logo: 'https://logo.clearbit.com/magichour.ai' },
  { id: '13', name: 'Descript', description: 'Audio and video editing tool with AI transcription, voice cloning, and overdub features', category: 'Video Creation', url: 'https://www.descript.com', logo: 'https://logo.clearbit.com/descript.com' },
  { id: '14', name: 'Synthesia', description: 'AI video creation platform that generates videos with AI avatars and voiceovers', category: 'Video Creation', url: 'https://www.synthesia.io', logo: 'https://logo.clearbit.com/synthesia.io' },
  { id: '15', name: 'Synthesis', description: 'Creates realistic AI avatars that look and sound like you from a short video recording', category: 'Video Creation', url: 'https://synthesis.io', logo: 'https://logo.clearbit.com/synthesis.io' },
  { id: '16', name: 'Lumen5', description: 'Converts blog posts and articles into engaging video content automatically', category: 'Video Creation', url: 'https://lumen5.com', logo: 'https://logo.clearbit.com/lumen5.com' },
  { id: '17', name: 'Pictory', description: 'Creates short branded videos from long-form content like webinars and podcasts', category: 'Video Creation', url: 'https://pictory.ai', logo: 'https://logo.clearbit.com/pictory.ai' },
  { id: '18', name: 'ChatGPT', description: 'Conversational AI assistant for answering questions, writing content, and problem-solving', category: 'Writing', url: 'https://chat.openai.com', logo: 'https://logo.clearbit.com/openai.com', featured: true },
  { id: '19', name: 'Jasper.ai', description: 'AI copywriting assistant for marketing content, blog posts, and social media captions', category: 'Writing', url: 'https://www.jasper.ai', logo: 'https://logo.clearbit.com/jasper.ai' },
  { id: '20', name: 'Grammarly', description: 'AI writing assistant that checks grammar, style, tone, and clarity in real-time', category: 'Writing', url: 'https://www.grammarly.com', logo: 'https://logo.clearbit.com/grammarly.com' },
  { id: '21', name: 'Copy.ai', description: 'Marketing copy generator for ads, product descriptions, and email campaigns', category: 'Writing', url: 'https://www.copy.ai', logo: 'https://logo.clearbit.com/copy.ai' },
  { id: '22', name: 'Wordtune', description: 'AI writing companion that suggests alternative ways to rephrase sentences for clarity', category: 'Writing', url: 'https://www.wordtune.com', logo: 'https://logo.clearbit.com/wordtune.com' },
  { id: '23', name: 'Notion AI', description: 'AI-powered workspace assistant integrated into Notion for writing, summarizing, and organizing', category: 'Writing', url: 'https://www.notion.so', logo: 'https://logo.clearbit.com/notion.so', featured: true },
  { id: '24', name: 'GPTzero.me', description: 'AI content detector that identifies whether text was written by AI or humans', category: 'Writing', url: 'https://gptzero.me', logo: 'https://logo.clearbit.com/gptzero.me' },
  { id: '25', name: 'ElevenLabs', description: 'AI voice generation and cloning platform for creating realistic text-to-speech audio', category: 'Audio', url: 'https://elevenlabs.io', logo: 'https://logo.clearbit.com/elevenlabs.io', featured: true },
  { id: '26', name: 'Krisp', description: 'AI-powered noise cancellation tool for calls that removes background sounds', category: 'Audio', url: 'https://krisp.ai', logo: 'https://logo.clearbit.com/krisp.ai' },
  { id: '27', name: 'Speechify', description: 'Text-to-speech app that reads documents, articles, and PDFs aloud with natural voices', category: 'Audio', url: 'https://speechify.com', logo: 'https://logo.clearbit.com/speechify.com' },
  { id: '28', name: 'Soundraw', description: 'AI music generator that creates royalty-free background music for videos and projects', category: 'Audio', url: 'https://soundraw.io', logo: 'https://logo.clearbit.com/soundraw.io' },
  { id: '29', name: 'Napkin.ai', description: 'Transforms text into visual diagrams and infographics automatically for presentations', category: 'Presentations', url: 'https://napkin.ai', logo: 'https://logo.clearbit.com/napkin.ai' },
  { id: '30', name: 'Tome', description: 'AI presentation builder that creates complete slide decks from simple prompts', category: 'Presentations', url: 'https://tome.app', logo: 'https://logo.clearbit.com/tome.app', featured: true },
  { id: '31', name: 'Beautiful.ai', description: 'Presentation software with AI-assisted design that automatically formats slides', category: 'Presentations', url: 'https://www.beautiful.ai', logo: 'https://logo.clearbit.com/beautiful.ai' },
  { id: '32', name: 'Gamma', description: 'AI-powered presentation and document creator that builds beautiful decks from outlines', category: 'Presentations', url: 'https://gamma.app', logo: 'https://logo.clearbit.com/gamma.app' },
  { id: '33', name: 'lovable.ai', description: 'AI-powered app builder that generates full-stack web applications from natural language descriptions', category: 'Coding', url: 'https://lovable.ai', logo: 'https://logo.clearbit.com/lovable.ai' },
  { id: '34', name: 'blackbox.ai', description: 'Alternative AI assistant to ChatGPT for coding and general queries when GPT is unavailable', category: 'Coding', url: 'https://www.blackbox.ai', logo: 'https://logo.clearbit.com/blackbox.ai' },
  { id: '35', name: 'Replit Ghostwriter', description: 'AI pair programmer that assists with code completion and debugging in Replit', category: 'Coding', url: 'https://replit.com', logo: 'https://logo.clearbit.com/replit.com', featured: true },
  { id: '36', name: 'Hugging Face', description: 'Open-source platform hosting thousands of AI models for various machine learning tasks', category: 'Coding', url: 'https://huggingface.co', logo: 'https://logo.clearbit.com/huggingface.co' },
  { id: '37', name: 'N8N', description: 'Workflow automation platform that connects apps and services to build complex automation sequences without code', category: 'Coding', url: 'https://n8n.io', logo: 'https://logo.clearbit.com/n8n.io' },
  { id: '38', name: 'Perplexity AI', description: 'AI search engine that provides cited, conversational answers to complex questions', category: 'Research', url: 'https://www.perplexity.ai', logo: 'https://logo.clearbit.com/perplexity.ai', featured: true },
  { id: '39', name: 'Problemhunt.pro', description: 'Discovery platform for finding real problems to solve, helping entrepreneurs validate business ideas', category: 'Research', url: 'https://problemhunt.pro', logo: 'https://logo.clearbit.com/problemhunt.pro' },
  { id: '40', name: 'Otter.ai', description: 'Real-time transcription service for meetings, interviews, and lectures with speaker identification', category: 'Research', url: 'https://otter.ai', logo: 'https://logo.clearbit.com/otter.ai' },
  { id: '41', name: 'Fireflies.ai', description: 'AI meeting assistant that records, transcribes, and summarizes conversations', category: 'Research', url: 'https://fireflies.ai', logo: 'https://logo.clearbit.com/fireflies.ai' },
  { id: '42', name: 'Lupa AI upscaler', description: 'Image upscaling tool that enhances photo resolution and quality using artificial intelligence', category: 'Utilities & Productivity', url: 'https://lupa.ai', logo: 'https://logo.clearbit.com/lupa.ai' },
  { id: '43', name: 'Hitem3d.ai', description: 'Creates 3D models and assets from text descriptions or 2D images', category: 'Utilities & Productivity', url: 'https://hitem3d.ai', logo: 'https://logo.clearbit.com/hitem3d.ai' },
  { id: '44', name: 'tinywow.com', description: 'Free online toolkit for PDF editing, image conversion, video editing, and file manipulation without downloads', category: 'Utilities & Productivity', url: 'https://tinywow.com', logo: 'https://logo.clearbit.com/tinywow.com' },
  { id: '45', name: 'Fliiipbook.com', description: 'Simple GIF animation creator for the web', category: 'Utilities & Productivity', url: 'https://fliiipbook.com', logo: 'https://logo.clearbit.com/fliiipbook.com' },
  { id: '46', name: 'transfer.zip', description: 'Simple, secure file transfer service for sharing large files without size restrictions', category: 'Utilities & Productivity', url: 'https://transfer.zip', logo: 'https://logo.clearbit.com/transfer.zip' },
  { id: '47', name: 'AI coupon code finder', description: 'Automatically finds and applies valid coupon codes when shopping online', category: 'Utilities & Productivity', url: 'https://chat.openai.com', logo: 'https://logo.clearbit.com/openai.com' },
  { id: '48', name: 'Florafuana', description: 'Canvas workspace that connects and integrates multiple AI tools in one place', category: 'Utilities & Productivity', url: 'https://florafuana.com', logo: 'https://logo.clearbit.com/florafuana.com' },
  { id: '49', name: 'Pathtodesign.com', description: 'Directory connecting designers in tech, where they share career paths to inspire others', category: 'Utilities & Productivity', url: 'https://pathtodesign.com', logo: 'https://logo.clearbit.com/pathtodesign.com' },
  { id: '50', name: 'Claude', description: 'Next-generation AI assistant for tasks, regardless of scale', category: 'Writing', url: 'https://claude.ai', logo: 'https://logo.clearbit.com/anthropic.com', featured: true }
];
