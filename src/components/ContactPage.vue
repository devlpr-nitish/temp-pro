<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="contact-hero">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Get in touch for ERPNext solutions, demos,
        or partnerships.
      </p>
    </section>

    <!-- Contact Form -->
    <section class="contact-form-section">
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>

        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <!-- Contact Info -->
      <div class="contact-info">
        <h2>Our Office</h2>
        <p>📍 Aurangabad, Bihar, India</p>
        <p>📧 devlprnitish@gmail.com</p>
        <p>📞 +91 99056 34978</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { useHead } from "@vueuse/head"

// SEO metadata
useHead({
  title: "Contact Us | ERPNext Startup",
  meta: [
    {
      name: "description",
      content:
        "Contact our ERPNext Startup team for business inquiries, partnerships, or support.",
    },
    { property: "og:title", content: "ERPNext Startup - Contact Us" },
    {
      property: "og:description",
      content: "Reach out to us for ERPNext-powered solutions and support.",
    },
    {
      property: "og:image",
      content:
        "https://nannygranny-prod.s3.ap-southeast-2.amazonaws.com/chatroom/760/PCcy7YP4Kpenew0wO0mVe9pUK1l9tTpoffYrwnFT.png",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content:
        "https://nannygranny-prod.s3.ap-southeast-2.amazonaws.com/chatroom/760/PCcy7YP4Kpenew0wO0mVe9pUK1l9tTpoffYrwnFT.png",
    },
  ],
})

// Reactive form state
const form = reactive({
  name: "",
  email: "",
  message: "",
})

function submitForm() {
  console.log("Form Submitted:", form)
  alert("Thank you for reaching out! We’ll get back to you soon.")

  // reset form
  form.name = ""
  form.email = ""
  form.message = ""
}
</script>

<style scoped>
.contact-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
}

/* Hero */
.contact-hero {
  background: linear-gradient(135deg, #007bff, #6610f2);
  color: white;
  padding: 60px 20px;
}

.contact-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

/* Form + Info Section */
.contact-form-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 20px;
  gap: 40px;
}

/* Contact Form */
.contact-form {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex: 1 1 300px;
  max-width: 400px;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  width: 100%;
  background: #007bff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

button:hover {
  background: #0056b3;
}

/* Contact Info */
.contact-info {
  flex: 1 1 250px;
  max-width: 300px;
  text-align: left;
}

.contact-info h2 {
  margin-bottom: 15px;
  color: #007bff;
}

.contact-info p {
  margin-bottom: 10px;
  font-size: 1rem;
}
</style>
