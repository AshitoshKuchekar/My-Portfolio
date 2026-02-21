import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vendor Performance Analysis",
    description: "This project evaluates vendor performance and retail inventory dynamics to drive strategic insights for purchasing, pricing, and inventory optimization. A complete data pipeline was built using SQL for ETL, Python for analysis and hypothesis testing, and Power BI for visualization.",
    image: "/projects/dashboard.png",
    tags: ["Python", "Power BI","PostgreSQL"],
    demoUrl: "https://github.com/AshitoshKuchekar/vendor-performance-analysis-sql-python-powerbi",
    githubUrl: "https://github.com/AshitoshKuchekar/vendor-performance-analysis-sql-python-powerbi",
  },
  {
    id: 2,
    title: "Customer Shopping Behavior Analysis",
    description:
      "Data Analysis and Visualization of Customer Shopping Behavior using Power BI, SQL Python, Pandas, Seaborn and Matplotlib. Analyzed customer shopping behavior data to identify trends and insights, and created interactive visualizations to communicate findings effectively.",
    image: "projects/Screenshot 2026-02-08 163359.png",
    tags: ["Python", "Power BI","PostgreSQL"],
    demoUrl: "https://github.com/AshitoshKuchekar/Customer-Behaviour-Analysis",
    githubUrl: "https://github.com/AshitoshKuchekar",
  },
  {
    id: 3,
    title: "Swiggy Data Analysis",
    description:"This project involves analyzing and cleaning the dataset provided by Swiggy. Swiggy is a popular food delivery service in India, and the dataset includes various tables related to food items, menus, orders, order types, restaurants, and users. The goal is to clean the data, format the tables, and store the processed dataset for further analysis.",
    image: "projects/Dashboard2.png",
    tags: ["Python", "Power BI","Excel"],
    demoUrl: "https://github.com/AshitoshKuchekar/",
    githubUrl: "https://github.com/AshitoshKuchekar",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with transforming raw data into actionable business insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AshitoshKuchekar"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};