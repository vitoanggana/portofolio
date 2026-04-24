<template>
  <div class="flex flex-col gap-8">
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      I am a final-year Japanese Language Education student with a diverse background in web development, content creation, and international work experience in Japan.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      I started my journey in software engineering during vocational high school, where I built a foundation in web development using HTML, CSS, and JavaScript. Along the way, I also explored modern tools and frameworks while working on freelance and internship projects.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      Beyond tech, I have experience as a content creator and planner, producing engaging digital content and managing social media for brands. I also spent one year working in Japan, where I delivered customer service in Japanese and adapted to a fast-paced, cross-cultural environment.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      Today, I focus on combining my language skills, digital experience, and adaptability to explore new opportunities and continue growing both professionally and personally.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      Outside of my worklife, I love to play Games, Currently playing Crimson Desert on PS5 Pro (im very proud of this). I also listening to different genres of music, my fav western band is Rex Orange County, solo artist is Sufjan Steven and Grant Perez.
      or add me through <LinkBtn link="https://www.facebook.com/profile.php?id=100070325343819">Facebook</LinkBtn>. I
      post very rarely so you might not find many posts on either.
    </p>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
    <div class="flex flex-col gap-5">
      <h3 class="font-theme_bold text-head_text text-3xl">Work</h3>
      <div class="flex flex-col gap-8 py-4">
        <a class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6"
          v-for="work in works" :key="work.id" :href="work.link">
          <span class="font-theme_bold text-head_text">{{ work.name }}</span>
          <span class="flex-[1_1_auto]"></span>
          <span class="sm:text-right text-sm sm:text-base">{{
              work.position
          }}</span>
          <span class="text-sm sm:text-base">{{ work.from }} - {{ work.to }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { useWorkStore } from "../store/workStore";

export default {
  setup() {
    const workStore = useWorkStore();
    const works = workStore.getAllWorks;

    return { works };
  },
};
</script>
