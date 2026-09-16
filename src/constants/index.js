import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  homeSmile,
  file02,
  searchMd,
  plusSquare,
  notification2,
  notification3,
  notification4,
} from "../assets";

import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Process",
    url: "#process",
  },
  {
    id: "3",
    title: "Research",
    url: "#research",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const heroStrip = [
  "Android reverse engineering",
  "APK & malware analysis",
  "Pentest & blue team",
  "Bluetooth / HID / wireless",
  "Evidence-preserved work",
];

export const typewriterStrings = [
  "Android reverse engineering",
  "Malware triage & analysis",
  "Wireless & Bluetooth security",
  "Pentesting & blue teaming",
  "Evidence-preserved investigations",
];

export const services = [
  {
    id: "0",
    icon: "▣",
    title: "Mobile App Security Assessment",
    text: "Deep technical review of Android applications and their surrounding infrastructure.",
    bullets: [
      "Android reverse engineering & APK disassembly",
      "ADB / Shizuku privileged workflow testing",
      "Tamper-resistance & hardening review",
      "Actionable findings with fix guidance",
    ],
  },
  {
    id: "1",
    icon: "☣",
    title: "Android Malware Triage & Analysis",
    text: "Determine what a suspicious app actually does — quickly, safely, and with evidence.",
    bullets: [
      "Static & dynamic malware analysis",
      "Behavioral sandbox review of APKs",
      "Indicators of compromise (IOC) extraction",
      "Plain-language write-ups for stakeholders",
    ],
  },
  {
    id: "2",
    icon: "≋",
    title: "Wireless & Bluetooth Security Analysis",
    text: "Examination of wireless attack surface for devices, peripherals, and IoT products.",
    bullets: [
      "Bluetooth HCI traffic capture & analysis",
      "BLE / wireless protocol review",
      "Peripheral & input-device security testing",
      "Fix-oriented protocol recommendations",
    ],
  },
  {
    id: "3",
    icon: "◈",
    title: "Evidence-Preserved Investigations",
    text: "Forensically sound examination where chain-of-custody and integrity matter.",
    bullets: [
      "Evidence-preserved device examination",
      "Data recovery & forensic triage",
      "Documented, reproducible methodology",
      "Defensible reporting",
    ],
  },
  {
    id: "4",
    icon: "⚔",
    title: "Penetration Testing & Blue Teaming",
    text: "Full-lifecycle offensive and defensive engagements across network, wireless, and cloud surfaces.",
    bullets: [
      "Recon, vulnerability scanning & exploitation",
      "Post-exploitation, pivoting & C2",
      "SIEM, monitoring & network hardening",
      "AD / cloud / container security review",
    ],
  },
  {
    id: "5",
    icon: "⌨",
    title: "HID & Peripheral Security",
    text: "Trust analysis for keyboards and input devices — the attack surface most hosts take for granted.",
    bullets: [
      "BLE peripheral identity reconnaissance",
      "HID descriptor & report analysis",
      "Keystroke-injection & spoofing assessment",
      "Verifiable-device design guidance",
    ],
  },
];

export const process = [
  {
    id: "0",
    title: "Fixed-scope security review",
    description:
      "Mobile app, API, or web surface. Defined scope, fixed quote, and a findings report you can act on.",
    features: [
      "Rules of engagement & scoping worksheet",
      "Evidence-preserved, documented methodology",
      "Findings report with remediation tracker",
      "Re-test after fixes are landed",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Malware triage",
    description:
      "Suspicious sample or app? Static and dynamic analysis with a plain-language verdict.",
    features: [
      "Static & dynamic APK analysis",
      "Behavioral sandbox review",
      "IOC extraction for your IR team",
      "Stakeholder-ready write-up",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Advisory & hardening",
    description:
      "Ongoing blue-team support: monitoring, hardening, and config review for your stack.",
    features: [
      "SIEM & monitoring guidance",
      "Network & host hardening",
      "AD / cloud / container review",
      "Retainer availability",
    ],
    premium: false,
  },
];

export const research = [
  {
    id: "0",
    repo: "android-security-wizard",
    text: "Public Android security research corpus — ADB / Shizuku privileged workflows, APK analysis techniques, and mobile security research findings.",
    status: "public",
    url: "https://github.com/savagedamage/android-security-wizard",
    colorful: true,
  },
  {
    id: "1",
    repo: "pentest-bluestack-toolkit",
    text: "Pentest & Blue Team toolkit — a consolidated multi-platform reference (Arch, BlackArch, Kali, Parrotsec, NetHunter) covering recon, exploitation, C2, wireless, and blue-team hardening.",
    status: "public",
    url: "https://github.com/savagedamage/pentest-bluestack-toolkit",
  },
  {
    id: "2",
    repo: "hid-security-research",
    text: "Defensive HID security research — a cited knowledge base, threat/vulnerability data, and an observation prototype for making keyboards observable, verifiable, and trustworthy.",
    status: "public",
    url: "https://github.com/savagedamage/hid-security-research",
  },
  {
    id: "3",
    repo: "awesome-hid-security",
    text: "Curated list of tools, hardware, payloads, research, and defenses for HID security — wireless input peripherals, keystroke injection, and related attack & defense tooling.",
    status: "public",
    url: "https://github.com/savagedamage/awesome-hid-security",
  },
];

export const researchNote =
  "Every project is presented as-is for research and defensive education. Adversarial tooling is published for the blue team — to understand what defenders are up against.";

export const benefits = [
  {
    id: "0",
    title: "Direct access",
    text: "One practitioner, no account-manager layer. You talk to the person doing the work, from scoping to findings.",
    iconUrl: benefitIcon1,
    light: false,
  },
  {
    id: "1",
    title: "Evidence-preserved by default",
    text: "Chain-of-custody discipline, documented methodology, and defensible reporting on every engagement.",
    iconUrl: benefitIcon2,
    light: true,
  },
  {
    id: "2",
    title: "Findings you can act on",
    text: "Plain-language write-ups paired with fix guidance — no padded PDFs, no find-and-run.",
    iconUrl: benefitIcon3,
    light: false,
  },
  {
    id: "3",
    title: "Deep mobile capability",
    text: "From the app layer down to the radio: APK reversing, ADB / Shizuku, Bluetooth HCI, HID and peripheral testing.",
    iconUrl: benefitIcon4,
    light: true,
  },
  {
    id: "4",
    title: "Public research corpus",
    text: "Techniques developed in client work are published openly for the community to review, reuse, and verify.",
    iconUrl: benefitIcon1,
    light: false,
  },
  {
    id: "5",
    title: "Global, UAE-based",
    text: "Remote-ready worldwide, operating in the Gulf timezone — responses within one business day.",
    iconUrl: benefitIcon2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "GitHub",
    url: links.github,
  },
  {
    id: "1",
    title: "Email",
    url: links.email,
  },
  {
    id: "2",
    title: "WhatsApp",
    url: links.whatsapp,
  },
];
