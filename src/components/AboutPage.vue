<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="about-hero">
      <h1>About Us</h1>
      <p>
        We are a startup passionate about building ERPNext solutions that empower
        businesses to grow smarter.
      </p>
    </section>

    <!-- Mission & Vision -->
    <section class="mission">
      <div class="card">
        <h2>Our Mission</h2>
        <p>
          To simplify complex business processes by delivering reliable,
          scalable, and customized ERPNext solutions.
        </p>
      </div>
      <div class="card">
        <h2>Our Vision</h2>
        <p>
          To become the go-to technology partner for startups and enterprises
          adopting ERPNext worldwide.
        </p>
      </div>
    </section>

    <!-- Values -->
    <section class="values">
      <h2>What We Stand For</h2>
      <ul>
        <li>✔ Innovation — We build solutions that adapt to change.</li>
        <li>✔ Transparency — Open communication and fair practices.</li>
        <li>✔ Collaboration — We grow together with our clients.</li>
        <li>✔ Reliability — Always delivering with quality.</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head"

useHead({
  title: "About Us | ERPNext Startup",
  meta: [
    {
      name: "description",
      content:
        "Learn about our mission to simplify business operations with ERPNext.",
    },
    { property: "og:title", content: "ERPNext Startup - About Us" },
    {
      property: "og:description",
      content: "We are passionate about ERPNext-powered solutions.",
    },
    {
      property: "og:image",
      content:
        "https://nannygranny-prod.s3.ap-southeast-2.amazonaws.com/chatroom/789/Gxtdo7R4vmdoUEk80gLXLNTcFOq1qzBHXCkkmQgA.png",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content:
        "https://nannygranny-prod.s3.ap-southeast-2.amazonaws.com/chatroom/789/Gxtdo7R4vmdoUEk80gLXLNTcFOq1qzBHXCkkmQgA.png",
    },
  ],
})
</script>

<style scoped>
.about-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
}

/* Hero */
.about-hero {
  background: linear-gradient(135deg, #007bff, #6610f2);
  color: white;
  padding: 60px 20px;
}

.about-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.about-hero p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: auto;
}

/* Mission & Vision */
.mission {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 60px 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 280px;
  max-width: 350px;
}

.card h2 {
  color: #007bff;
  margin-bottom: 10px;
}

/* Values */
.values {
  background: #f9f9f9;
  padding: 60px 20px;
}

.values h2 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.values ul {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: auto;
  text-align: left;
}

.values li {
  background: white;
  margin-bottom: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
</style>
