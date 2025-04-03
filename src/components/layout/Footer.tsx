import React from "react";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
    title: "Learn with Us",
    links: [
      { text: "Courses", href: "#" },
      { text: "Certifications", href: "#" },
      { text: "Learning Paths", href: "#" },
      { text: "Live Classes", href: "#" },
      { text: "Mobile Learning", href: "#" },
    ],
  },
  {
    title: "Business",
    links: [
      { text: "For Enterprise", href: "#" },
      { text: "For Small Teams", href: "#" },
      { text: "Become an Instructor", href: "#" },
      { text: "Skills Assessment", href: "#" },
      { text: "Course Creation", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "FAQ", href: "#" },
      { text: "Refunds", href: "#" },
      { text: "Technical Issues", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-udemy-dark text-white pt-12 pb-8">
      <div className="container-course">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerData.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="mb-4 md:mb-0">
            <a href="/" className="font-bold text-2xl text-white">
              Learnify
            </a>
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} Learnify, Inc. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
