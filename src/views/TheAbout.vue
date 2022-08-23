<template>
  <div class="flex flex-col gap-8">
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      I am a Junior Web-Developer, as a someone who have graduated from Vocational Highschool with a Software
      Engineering Major and also a year experience as a Programmer in several company. I still have a lot to learn,
      currently I am a Freelance Programmer looking for another chance where I can learn and gain experience.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      Beside than coding, I have experience working for
      <LinkBtn link="https://mahakamedia.com/">Mahaka Media</LinkBtn>, as a Content Creator and Content Planner
      Freelancer and I manage 2 of
      their Cafes <LinkBtn link="https://www.instagram.com/sixdegreesentul/">Six Degrees</LinkBtn> and <LinkBtn
        link="https://www.instagram.com/jatuhhati_sentul/">Jatuh Hati</LinkBtn>. I previously worked at
      <LinkBtn link="https://xcidic.com/">Xcidic</LinkBtn>, as an Internship Front-end Developer.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      I started learning about web-development in my early high-school, where I
      was introduced to HTML and CSS. I quickly started writing small webpages
      with simple HTML and little of CSS. After my high-school, I took some time
      to myself and explored the web development world more and found many
      frameworks. Like Laravel, Out of all, I found my love for Vue.js. Since then, I've been
      mastering it, and with every new project I added a new tool, like
      TailwindCSS and more.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      You can find my projects on my
      <LinkBtn link="https://github.com/vitoanggana">Github</LinkBtn> or on my
      <LinkBtn href="/public/Vito Anggana Profile.pdf" download="CV Vito Anggana">CV</LinkBtn>. I usually don't update
      my
      portfolio page but all my recent one's are on github.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      Though now i've spent less time to code because I'm a Content Creator/Planner Freelancer at two cafes. But still
      I'm interested to this position.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      Outside of my worklife, I love to play Valorant and Apex legends, listening to
      Eve, Yorushika, Yoasobi. on Youtube, or just hanging out on Discord with my friends. You can
      follow along about my life on my
      <LinkBtn link="https://www.instagram.com/vitooooooo.lol/">Instagram</LinkBtn>
      or <LinkBtn link="https://www.facebook.com/profile.php?id=100070325343819">Facebook</LinkBtn>. I
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
