<template>
  <div class="services">
    <h1>Our Services</h1>
    <p class="intro">
      We provide modern ERPNext solutions tailored to your business needs.
    </p>

    <div class="service-list">
      <div class="service-card">
        <h2>ERPNext Setup</h2>
        <p>
          End-to-end setup and configuration of ERPNext for your organization.
        </p>
      </div>

      <div class="service-card">
        <h2>Customization</h2>
        <p>
          We customize ERPNext modules to perfectly align with your workflow.
        </p>
      </div>

      <div class="service-card">
        <h2>Integration</h2>
        <p>
          Integrate ERPNext with other tools to build a seamless digital ecosystem.
        </p>
      </div>

      <div class="service-card">
        <h2>Support & Training</h2>
        <p>
          Get ongoing support and training to make the most of your ERPNext.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head"

useHead({
  title: "Services | ERPNext Startup",
  meta: [
    {
      name: "description",
      content:
        "Discover our ERPNext services tailored to simplify and optimize your business operations.",
    },
    { property: "og:title", content: "ERPNext Startup - Services" },
    {
      property: "og:description",
      content:
        "We offer ERPNext implementation, customization, and support services.",
    },
    {
      property: "og:image",
      content:
        "https://nannygranny-prod.s3.ap-southeast-2.amazonaws.com/chatroom/769/Yk3sh62ZHw6Pnx5X92Jbf0UKvEHDOHNFMJT8AL8P.png",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content:
        "https://nannygranny-prod.s3.ap-southeast-2.amazonaws.com/chatroom/769/Yk3sh62ZHw6Pnx5X92Jbf0UKvEHDOHNFMJT8AL8P.png",
    },
  ],
})
</script>

<style scoped>
.services {
  padding: 40px;
  text-align: center;
}

.services h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.services .intro {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
}

.service-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.service-card {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card h2 {
  color: #3498db;
  margin-bottom: 10px;
}
</style>
