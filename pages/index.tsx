import Hero from "../src/templates/landing_page-service-2/Hero/";
import Features from "../src/templates/landing_page-service-2/Features/";
import Testimonials from "../src/templates/landing_page-service-2/Testimonials/";
import Footer from "../src/flat/Footer/";

const data = {"uvp":"Instantly create a landing page powered by AI and start building your brand today!","copy":{"hero":{"header":"Get a stylish, powerful landing page in seconds with Landify","pricing":"$9.99/month","subheader":"Just type your startup idea and choose your design style, we'll handle the rest. Plans start at $9.99/month."},"features":{"title":"Landify: Everything you need for a killer landing page","pricing":"","description":"From beautiful designs to AI-powered marketing tools, Landify has everything you need to create a professional, effective landing page. Features include:","feature_items":[{"title":"Dozens of professional design styles","description":"Choose from a variety of gorgeous templates for your landing page with a simple click"},{"title":"Marketing tools powered by AI","description":"Landify's powerful AI tools help you optimize your landing page for success"},{"title":"Easy email collection and lead generation","description":"Start collecting leads right away with pre-built email collection forms"},{"title":"Real-time analytics and A/B testing","description":"Track your landing page's performance and make data-driven decisions with real-time analytics and A/B testing"}]},"testimonials":{"title":"What our customers are saying about Landify","description":"Our satisfied customers speak for themselves. Read on to see what they think about Landify:","testimonial_items":[{"text":"I needed a landing page fast, and Landify delivered. The AI tools were a game changer for me.","person":{"name":"John Smith","role":"Founder of XYZ"}},{"text":"I'm not a designer, but with Landify's templates, I was able to create a page that looks like a pro made it. Highly recommended!","person":{"name":"Jane Doe","role":"Marketing Manager at ABC"}}]}},"tone":"Professional and modern yet approachable","images":{"hero_prompt":"","features_prompt":""},"templates":[{"name":"landing_page-service-2","type":"hero"},{"name":"landing_page-service-2","type":"features"},{"name":"landing_page-service-2","type":"testimonials"}],"brand_name":"Landify","color_scheme":{"primary":"#4472CA","tertiary":"#EEB868","secondary":"#3FB1B5","background":"#FFFFFF","quaternary":"#F25D50","light_background":"#F5F5F5"}};

function GeneratedWebsite() {
  return (
    <>
      <Hero data={data} />
      <Features data={data} />
      <Testimonials data={data} />
      <Footer data={data} />
    </>
  );
}

export default GeneratedWebsite;