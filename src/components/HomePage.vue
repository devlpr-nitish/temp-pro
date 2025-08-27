<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <transition name="fade-slide">
        <div class="hero-content" v-if="show">
          <h1>Empower Your Business with ERPNext</h1>
          <p>
            Simplify operations, automate workflows, and scale with ease.
            Our ERPNext solutions help startups and enterprises grow smarter.
          </p>
          <button @click="getStarted">Get Started</button>
        </div>
      </transition>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Why Choose Us?</h2>
      <transition-group name="fade-up" tag="div" class="feature-list">
        <template v-for="(feature, index) in features" >
          <div
            v-if="show"
            class="feature-card"
            :style="{ transitionDelay: index * 0.2 + 's' }"
            :key="feature.title"
          >
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </template>
      </transition-group>
    </section>

    <!-- CTA Section -->
    <transition name="fade-slide">
      <section class="cta" v-if="show">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact us today and let’s build your ERPNext solution together.</p>
        <button @click="contactUs">Book a Demo</button>
      </section>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { useHead } from "@vueuse/head"

const router = useRouter()
const show = ref(false)

const features = [
  { title: "Custom ERPNext Apps", desc: "Tailor-made apps to match your workflow." },
  { title: "Seamless Integration", desc: "Connect ERPNext with your favorite tools." },
  { title: "Scalable Infrastructure", desc: "From startups to enterprises — we grow with you." },
  { title: "Expert Support", desc: "Get guidance and training from ERPNext professionals." }
]

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 200)
})

function getStarted() {
  router.push("/services")
}

function contactUs() {
  router.push("/contact")
}

// Page meta tags (replacement for vue-meta)
useHead({
  title: "Home | ERPNext Startup",
  meta: [
    { name: "description", content: "Simplify your business with our ERPNext services and solutions." },
    { property: "og:title", content: "ERPNext Startup - Home" },
    { property: "og:description", content: "Simplify your business with our ERPNext services." },
    { property: "og:image", content: "https://nannygranny-prod.s3.ap-southeast-2.amazonaws.com/chatroom/760/PCcy7YP4Kpenew0wO0mVe9pUK1l9tTpoffYrwnFT.png" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://nannygranny-prod.s3.ap-southeast-2.amazonaws.com/chatroom/760/PCcy7YP4Kpenew0wO0mVe9pUK1l9tTpoffYrwnFT.png" }
  ]
})
</script>

<style scoped>
.home-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease;
}

.fade-slide-enter {
  opacity: 0;
  transform: translateY(40px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.8s ease;
}

.fade-up-enter {
  opacity: 0;
  transform: translateY(40px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #007bff, #6610f2);
  color: white;
  padding: 80px 20px;
}

.hero-content {
  max-width: 800px;
  margin: auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.hero button {
  background: #ffdd57;
  color: #333;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.hero button:hover {
  background: #ffc107;
}

/* Features */
.features {
  padding: 60px 20px;
  background: #f9f9f9;
}

.features h2 {
  margin-bottom: 40px;
  font-size: 2rem;
}

.feature-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.feature-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 220px;
  max-width: 250px;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #007bff;
}

/* CTA */
.cta {
  padding: 60px 20px;
  background: #333;
  color: white;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cta button {
  background: #007bff;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.cta button:hover {
  background: #0056b3;
}
</style>
