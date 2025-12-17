"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Users, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="circleGradient"
      cardStyle="spotlight"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Visit Us",
            href: "contact"
          }}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988633059-5k12cwpf.jpg"
          logoAlt="Coffee Haven Logo"
          brandName="Coffee Haven"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Coffee Haven"
          description="Your local coffee sanctuary. Handcrafted espresso, warm atmosphere, and genuine connections."
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Find Us", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988417663-bexnmnxr.jpg"
          imageAlt="Warm cozy coffee shop interior"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Our Story"
          description="Founded in 2018, Coffee Haven started as a passion project to create a gathering space for coffee lovers in our community. We believe in sourcing the finest beans from ethical producers and crafting each cup with care. Every visit is an opportunity to experience exceptional coffee and build lasting connections."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988418891-n9bay348.jpg"
          imageAlt="Expert barista crafting coffee"
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardTwentyOne
          title="Our Signature Menu"
          description="Discover our carefully curated selection of coffee drinks and pastries."
          tag="Menu Highlights"
          tagIcon={Coffee}
          accordionItems={[
            {
              id: "1",
              title: "Espresso & Classics",
              content: "Pure, bold, and perfectly extracted. Our signature espresso blends paired with perfectly steamed milk. Choose from Americano, Cappuccino, Latte, and more."
            },
            {
              id: "2",
              title: "Specialty Drinks",
              content: "Creative seasonal favorites. Lavender Honey Latte, Caramel Macchiato, and our signature Cold Brew. Each drink tells a story."
            },
            {
              id: "3",
              title: "Fresh Pastries",
              content: "Baked fresh daily. Croissants, scones, muffins, and sandwiches made with premium local ingredients."
            },
            {
              id: "4",
              title: "Pour Over & Filter",
              content: "For the coffee connoisseur. Single-origin beans prepared with precision methods."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988419923-etbeoqjo.jpg"
          imageAlt="Beautifully crafted espresso"
          useInvertedBackground="noInvert"
          mediaPosition="left"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Owner & Head Barista",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988423499-c4adr630.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Specialty Coffee Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988424525-p81b0lfl.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Pastry Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988425631-dn82c84u.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Marcus Thompson",
              role: "Barista & Community Coordinator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988426654-m5szfpz6.jpg",
              imageAlt: "Marcus Thompson"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          title="Meet Our Team"
          description="Passionate coffee professionals dedicated to serving our community."
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          testimonials={[
            {
              id: "1",
              name: "Linda Parker, Regular Customer",
              date: "Date: January 15, 2025",
              title: "My favorite place in town",
              quote: "Coffee Haven has become my morning sanctuary. The coffee is exceptional, and Sarah and the team always remember my order. It's more than just coffee, it's community.",
              tag: "Regular Customer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988428080-8mh66n17.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988428080-8mh66n17.jpg"
            },
            {
              id: "2",
              name: "Michael Torres, Local Business Owner",
              date: "Date: December 28, 2024",
              title: "Perfect place for meetings",
              quote: "I conduct most of my client meetings here. The atmosphere is professional yet welcoming, and the pastries are incredible. Coffee Haven has become essential to my business.",
              tag: "Business Community",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988429541-0r1vgzvk.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988429541-0r1vgzvk.jpg"
            },
            {
              id: "3",
              name: "Jessica Wong, Coffee Enthusiast",
              date: "Date: December 20, 2024",
              title: "Finest specialty coffee around",
              quote: "As a true coffee lover, I appreciate the quality and expertise here. Their single-origin selections are carefully curated. James's recommendations are always spot-on.",
              tag: "Coffee Connoisseur",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988430875-1jufvcpx.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988430875-1jufvcpx.jpg"
            },
            {
              id: "4",
              name: "David Kim, Student",
              date: "Date: December 10, 2024",
              title: "My study home away from home",
              quote: "Perfect wifi, comfortable seating, and friendly baristas. I've spent countless hours here working on projects. Coffee Haven feels like home.",
              tag: "Regular Visitor",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988694349-m6niunev.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988694349-m6niunev.jpg"
            },
            {
              id: "5",
              name: "Amanda Foster, Artist",
              date: "Date: November 30, 2024",
              title: "Creative energy and great vibes",
              quote: "The art on the walls, the music selection, and the genuine warmth of the staff create the perfect environment for creativity. This place inspires me.",
              tag: "Creative Community",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988433229-tsxkft1x.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988433229-tsxkft1x.jpg"
            },
            {
              id: "6",
              name: "Robert Chen, Tech Professional",
              date: "Date: November 15, 2024",
              title: "A gem in our neighborhood",
              quote: "Finally found a local coffee shop that gets it right. Quality beans, skilled baristas, and a real community feel. Worth every visit.",
              tag: "Neighborhood Local",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988434875-kffimgzf.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988434875-kffimgzf.jpg"
            }
          ]}
          title="What Our Customers Say"
          description="Hear from the people who make Coffee Haven part of their daily routine."
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Coffee Haven."
          faqs={[
            {
              id: "1",
              title: "What are your hours?",
              content: "We're open Monday through Friday from 6:30 AM to 7:00 PM, Saturday 7:00 AM to 6:00 PM, and Sunday 8:00 AM to 5:00 PM."
            },
            {
              id: "2",
              title: "Do you offer WiFi?",
              content: "Yes! Free high-speed WiFi is available for all customers. Perfect for working or studying."
            },
            {
              id: "3",
              title: "Can I reserve a table?",
              content: "For groups of 6 or more, we recommend calling ahead at (555) 123-4567 to arrange seating."
            },
            {
              id: "4",
              title: "Do you have dairy-free options?",
              content: "Absolutely! We offer oat, almond, soy, and coconut milk alternatives for all our drinks."
            },
            {
              id: "5",
              title: "Where do you source your beans?",
              content: "We partner with ethical, fair-trade coffee farms across Central America and Ethiopia. Quality and sustainability are our priorities."
            },
            {
              id: "6",
              title: "Do you offer catering?",
              content: "Yes, we provide coffee and pastry catering for events. Contact us for custom packages and pricing."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions or want to visit us? Send us a message and we'll get back to you soon. We're always happy to hear from our coffee community."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us what's on your mind...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765988435891-kj1g1h88.jpg"
          imageAlt="Cozy Coffee Haven seating area"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          columns={[
            {
              items: [
                { label: "Home", href: "home" },
                { label: "Menu", href: "menu" },
                { label: "About Us", href: "about" }
              ]
            },
            {
              items: [
                { label: "Location", href: "#" },
                { label: "Hours", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Catering", href: "#" },
                { label: "Events", href: "#" },
                { label: "Gift Cards", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          logoText="Coffee Haven"
          logoAlt="Coffee Haven"
        />
      </div>
    </ThemeProvider>
  );
}