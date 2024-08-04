"use client";

import Image from "next/image";

const posts = [
  {
    id: 1,
    projectImageUrl:
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/avocado-price-analysis/Avocado+Price+Analysis+Dashboard.png",

    title: "Avocado Price Analysis",
    href: "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/avocado-price-analysis/Avocado+Price+Analysis.pdf",
    description:
      "While learning at Pittsburg State University, I worked on a project that involved analyzing avocado prices per given region in the United States. The data was provided by the lecturer of Statistics and Data Analysis. This analysis aimed to check what region has a high price of avocado and the number of bags of avocados sold in the years 2015 to 2018. ",
    date: "January 06, 2024",
    datetime: "2024-01-06",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 2,
    projectImageUrl:
      //   " https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Data+Visualization_1.png ",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    title: "Data Cleaning and Exploratory Analysis",
    href: "https://medium.com/@raahimkhan_85173/data-cleaning-and-exploratory-data-analysis-with-pandas-on-trending-you-tube-video-statistics-e06d7cd08710",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 3,
    projectImageUrl:
      //   " https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/data-lead.jpeg ",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    title: "Exploratory data analysis",
    href: "#",
    description: "Apply EDA techniques to any table of data using Python.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 4,
    projectImageUrl:
      //   " https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/images.png ",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    title: "COVID19 Data Visualization Using Python",
    href: "https://www.coursera.org/projects/covid19-data-visualization-using-python",
    description:
      "Visualize the global spread of COVID-19 using Python, Plotly, and a real data set.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 5,
    projectImageUrl:
      //   " https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/power-bi-dash.png ",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/avocado-price-analysis/Avocado+Price+Analysis+Dashboard.png",
    title: "Twitter Sentiment Analysis Tutorial",
    href: "#",
    description:
      "Clean thousands of tweets and use them to predict whether a customer is happy or not.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 6,
    projectImageUrl:
      //   " https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Data+Analyst+career.jpg ",
      //   "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/hr-analytics-project/HR+Data+Analysis.jpg",
    title: "Travel Time Optimization via Ant Colony and Genetic Evolution ",
    href: "https://github.com/khanhnamle1994/trip-optimizer",
    description:
      "In this project, I tackled the travel time optimization problem for taxi vehicles. This can be framed as the Traveling Salesman Problem, a well-known computer science problem. The objective is to find the shortest route that visits a set of locations.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },
];

export default function BlogSections() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            DATA PORTFOLIO
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A list of my top data analysis projects, in the form of Jupyter
            Notebooks and R Notebooks. Most notebooks are available fully
            open-sourced on GitHub, with a MIT license.. The technology stack
            used for some of these projects is :
            <b>
              <i>
                Excel, Power Bi, Amazon QuickSight , Tableau, SQL , Python and
                R-Programming, AWS.
              </i>
            </b>
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>

              <div>
                <Image
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src={`${post.projectImageUrl}`}
                  alt="An image of the final project"
                  width={250}
                  height={200}
                />
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}....
                </p>
                <a href={post.href} className="block w-max text-cyan-600">
                  Read more
                </a>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  width={50}
                  height={50}
                  alt="An image of the author"
                  src={post.author.imageUrl}
                  className="rounded-full bg-gray-50"
                />

                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
