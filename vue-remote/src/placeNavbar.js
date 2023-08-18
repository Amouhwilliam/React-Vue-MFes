import { createApp } from "vue";

import "./index.scss";

import Navbar from "./Navbar.vue";

export default function placeNavbar (element) {
    createApp(Navbar).mount(element);
}

