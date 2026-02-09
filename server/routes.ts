import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // In-memory projects data for demo purposes
  // Images are referenced by key; the client maps keys to imported assets
  const projects = [
    {
      title: "Endura Physio",
      description:
        "Physiotherapy clinic with online booking and comprehensive wellness services",
      url: "https://enduraphysio.com",
      imageKey: "endura",
      tech: ["WordPress", "Online Booking", "SEO"],
    },
    {
      title: "CCS Blooms Flowers",
      description:
        "Local flower farm with e-commerce, CSA program, and event services",
      url: "https://ccsbloomsflowers.com",
      imageKey: "bloom",
      tech: ["E-commerce", "Event Booking", "Local SEO"],
    },
    {
      title: "Fusion Tech FW",
      description:
        "Metal fabrication company specializing in commercial and residential services",
      url: "https://fusiontechfw.com",
      imageKey: "fusion",
      tech: ["Lead Generation", "Local SEO", "Service Pages"],
    },
    {
      title: "Baskon Main",
      description:
        "Restaurant website with menu showcase and reservation system",
      url: "https://baskonmain.net",
      imageKey: "baskon",
      tech: ["Restaurant SEO", "Online Menu", "Reservations"],
    },
    {
      title: "Tactics2Toys",
      description:
        "E-commerce toy store with category filtering and wishlist features",
      url: "https://tactics2toys.com",
      imageKey: "tactics",
      tech: ["E-commerce", "Product Filtering", "WooCommerce"],
    },
    {
      title: "Resilient Writers",
      description:
        "Writing community platform with blog and member features",
      url: "https://resilientwriters.com",
      imageKey: "writer",
      tech: ["Community Platform", "Membership", "Content Management"],
    },
  ];

  // Projects pagination endpoint
  app.get("/api/projects", (req, res) => {
    const page = Math.max(parseInt((req.query.page as string) || "1", 10), 1);
    const pageSize = Math.max(
      Math.min(parseInt((req.query.pageSize as string) || "3", 10), 50),
      1,
    );

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const items = projects.slice(start, end);
    const hasMore = end < projects.length;

    res.status(200).json({
      items,
      page,
      pageSize,
      total: projects.length,
      hasMore,
    });
  });
  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "client", "src", "assets", "resume.pdf");
    
    res.setHeader('Content-Disposition', 'attachment; filename="Shahbaz_Khan_Resume_2025.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    
    // In a real implementation, you would serve the actual PDF file
    // For now, we'll send a response indicating the file would be downloaded
    res.status(200).json({
      message: "Resume download initiated",
      filename: "Shahbaz_Khan_Resume_2025.pdf"
    });
  });

  // Contact form submission endpoint (for future implementation)
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // Here you would typically:
    // 1. Validate the input data
    // 2. Send an email notification
    // 3. Store the message in a database
    // 4. Send a confirmation email to the sender
    
    console.log("Contact form submission:", { name, email, message });
    
    res.status(200).json({
      success: true,
      message: "Message received successfully"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
