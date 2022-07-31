<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/vitoanggana"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Facebook"
        link="https://www.facebook.com/profile.php?id=100070325343819"
        icon="ant-design:facebook-filled"
      />
      <SocialIcon
        title="Instagram"
        link="https://www.instagram.com/vitooooooo.lol/"
        icon="ant-design:instagram-filled"
      />
    </div>
    <ActionButton link="mailto:vitoangganaprawira@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";

export default {
  components: { SocialIcon, ActionButton },
};
</script>
