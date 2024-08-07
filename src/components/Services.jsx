"use client";

import Image from "next/image";

export default function Services() {
  return (
    <div className="py-16 bg-purple-200">
      <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <header class="text-center mx-auto mb-12 lg:px-20">
          <h2 class="text-2xl leading-normal mb-2 font-bold text-black">
            What We Do
          </h2>

          <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising &amp; Content for your business.
          </p>
        </header>

        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div class="mb-12 space-y-4">
              <h3 class="text-2xl font-semibold text-purple-900">
                Graphic Design
              </h3>
              <p class="mb-6">
                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                cum, consectetur ullam tempora ipsa iste officia sed officiis!
                Incidunt ea animi officiis.
              </p>
              <a href="#" class="block font-medium text-purple-600">
                Know more
              </a>
            </div>

            <Image
              src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Logos/Data_Portfolio_Logo_3.jpg"
              // src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
              alt="service-illustration-image"
              width={900}
              height={600}
              className="w-2/3 ml-auto -mb-12"
            />
          </div>
          <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div class="mb-12 space-y-4">
              <h3 class="text-2xl font-semibold text-purple-900">UI Design</h3>
              <p class="mb-6">
                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                cum, consectetur ullam tempora ipsa iste officia sed officiis!
                Incidunt ea animi officiis.
              </p>
              <a href="#" class="block font-medium text-purple-600">
                Know more
              </a>
            </div>
            <Image
              src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Logos/Data_Portfolio_Logo_3.jpg"
              // src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
              alt="service-illustration-image"
              width={900}
              height={600}
              className="w-2/3 ml-auto"
            />
          </div>
          <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div class="mb-12 space-y-4">
              <h3 class="text-2xl font-semibold text-purple-900">UX Design</h3>
              <p class="mb-6">
                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                cum, consectetur ullam tempora ipsa iste officia sed officiis!
                Incidunt ea animi officiis.
              </p>
              <a href="#" class="block font-medium text-purple-600">
                Know more
              </a>
            </div>

            <Image
              src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Logos/Data_Portfolio_Logo_3.jpg"
              // src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg"
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
