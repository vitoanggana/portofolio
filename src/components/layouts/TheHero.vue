<template>
  <div class="flex flex-col gap-8">
    <h1
      class="text-xl sm:text-3xl md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-head_text">
      Keep it lean, mean and simple<span class="text-link_text_hover">.</span>
    </h1>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      Hi <span class="text-link_text_hover relative inline-block group font-theme_bold cursor-pointer">Vito Anggana!
        <div
                class="pointer-events-none absolute left-1/2 bottom-full z-50 mb-3 -translate-x-1/2 overflow-hidden rounded-lg border border-white/10 shadow-xl opacity-0 transition duration-200 group-hover:opacity-100"
                style="width: 320px; height: 220px;">
                <img
                  :src="vitoPhoto"
                  alt="Vito"
                  class="h-full w-full scale-[1.35] object-cover"
                    />
            </div>
</span>
      , I'm everyone. A final-year Japanese Language Education Student at <LinkBtn link="https://www.upi.edu/">Universitas Pendidikan Indonesia</LinkBtn> with experience in web development, content creation, and hospitality in
      <span class="text-link_text_hover relative inline-block group font-theme_bold cursor-pointer">
      Japan
      <img
        :src="japanPhoto"
        alt="Vito in Japan"
        class="pointer-events-none absolute left-1/2 bottom-full z-50 mb-3 -translate-x-1/2 rounded-lg border border-white/10 shadow-xl opacity-0 transition duration-200 group-hover:opacity-100"
        style="width: 320px; max-width: none;"
      />
    </span>.
      Fluent in English and Japanese (JLPT N3), with strong interest in digital and cross-cultural work.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      I have experience across multiple fields including front-end development, content creation, and international hospitality work in Japan for a year.
      During my time working in Japan, I delivered customer service in Japanese while supporting both front-of-house and kitchen operations in a fast-paced environment.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      In web development, I build responsive interfaces using HTML, CSS, and JavaScript. I have also worked as a content creator and planner, producing engaging digital content.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      For further information, you can download my <LinkBtn href="/public/Vito Anggana Profile.pdf" download="CV Vito Anggana.pdf">CV</LinkBtn>.
    </p>
  <br>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      If you interested in me personally, like, want to know what kind of person  I am. You can go here to read my <LinkBtn href="/diary">Diary. </LinkBtn>
      </p>

  </div>

  
</template>

<script>
import japanPhoto from "../../assets/imgs/japan.jpg";
import vitoPhoto from "../../assets/imgs/vito.jpg";

export default {
  setup() {
    return {
      japanPhoto,
      vitoPhoto,
    };
  },
};
</script>
