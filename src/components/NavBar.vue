<template>
  <header class="navbar">
    <div class="container">
      <!-- Logo / Brand -->
      <div class="logo">
        <router-link to="/">ERPNext Startup</router-link>
      </div>

      <!-- Menu Button (mobile) -->
      <button class="menu-btn" @click="toggleMenu">
        ☰
      </button>

      <!-- Nav Links -->
      <nav :class="{ 'show': isOpen }">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
/* Navbar container */
.navbar {
  background: #333;
  color: white;
  padding: 0.8rem 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

/* Flex container */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo a {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffdd57;
  text-decoration: none;
}

/* Links */
nav {
  display: flex;
  gap: 1.2rem;
}
nav a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}
nav a:hover {
  color: #ffdd57;
}
nav a.router-link-exact-active {
  border-bottom: 2px solid #ffdd57;
  padding-bottom: 2px;
}

/* Mobile Menu Button */
.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    display: none;
    flex-direction: column;
    gap: 1rem;
    background: #222;
    padding: 1rem;
    position: absolute;
    top: 60px;
    right: 10px;
    border-radius: 8px;
  }
  nav.show {
    display: flex;
  }
  .menu-btn {
    display: block;
  }
}
</style>
