"use client";

import Image from "next/image";

export default function Services() {
  return (
    <div className="py-16 bg-purple-200">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Driving better business decisions
          </h2>

          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            We are dedicated to helping our clients unlock the full potential of
            their subsurface data through our innovative suite of tools and
            services. Through the ES consulting Suite, we provide advanced data
            analytics, visualization, and workflow automation capabilities to
            help you make sense of your data and derive valuable insights. In
            addition, we offer consulting services to help you optimize your
            workflows and achieve your business objectives, as well as
            multi-client products to provide you with the data you need to drive
            your decision-making.
          </p>
        </header>

        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-900">
                Academic Research
              </h3>
              <p className="mb-6">
                Book a free consultation to discuss your dissertation. We
                provide research & development. A team of experts who are
                dedicated to helping you complete your dissertation with ease.
              </p>
              <a
                href="https://www.researchgate.net/profile/Edwige-Feulefack-Songong-2"
                className="block font-medium text-purple-600"
              >
                Know more
              </a>
            </div>

            <Image
              src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Services/academic_rc.jpg"
              alt="service-illustration-image"
              width={900}
              height={600}
              className="w-2/3 ml-auto -mb-12"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 class="text-2xl font-semibold text-purple-900">
                Data Analytics
              </h3>
              <p className="mb-6">
                Our curated and analytics-ready data suites provide the
                foundation for turning data into insights and action. With our
                data packages, you can access cleaned, indexed, and
                contextualized data that can be plugged directly into your
                business workflows, saving you time and resources.
              </p>
              <a
                href="https://aws.amazon.com/big-data/datalakes-and-analytics/"
                className="block font-medium text-purple-600"
              >
                Know more
              </a>
            </div>
            <Image
              src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Services/amazon-quicksight-graph.png"
              alt="service-illustration-image"
              width={900}
              height={600}
              className="w-2/3 ml-auto"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-900">
                Training and Learning
              </h3>
              <p className="mb-6">
                Get the training you need to succeed in today's data analyst
                career with our courses, mentored process and educational
                resources.
              </p>
              <a
                href="https://aws.amazon.com/big-data/datalakes-and-analytics/"
                className="block font-medium text-purple-600"
              >
                Know more
              </a>
            </div>

            <Image
              src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Services/Service-Training-Manual.webp"
              alt="service-illustration-image"
              width={900}
              height={600}
              className="w-2/3 ml-auto"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-900">
                Research Publications
              </h3>
              <p className="mb-6">
                Book a free consultation to discuss your dissertation. We
                provide research & development. A team of experts who are
                dedicated to helping you complete your dissertation with ease.
              </p>
              <a
                href="https://www.researchgate.net/profile/Edwige-Feulefack-Songong-2"
                className="block font-medium text-purple-600"
              >
                Know more
              </a>
            </div>

            <Image
              src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Services/Publishing.jpg"
              alt="service-illustration-image"
              width={900}
              height={600}
              className="w-2/3 ml-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
