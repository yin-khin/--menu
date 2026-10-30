fetch("./menu.style")
  .then(response => {
    if (!response.ok) throw new Error(`Could not load menu.style (${response.status}).`);
    return response.text();
  })
  .then(css => {
    const styleElement = document.createElement("style");
    styleElement.textContent = css;
    document.head.append(styleElement);
  })
  .catch(error => console.error("Menu stylesheet failed to load:", error));
const dishes = [
      { id: 1, category: "mains", name: "Khmer Amok", khName: "អាម៉ុកខ្មែរ", description: "Tender fish steamed in coconut curry, wrapped in banana leaf.", khDescription: "ត្រីចំហុយជាមួយការីដូង រុំស្លឹកចេក។", price: 12.5, image: "photo-1559847844-5315695dadae", tag: "Bestseller", khTag: "ពេញនិយម", vegetarian: false },
      { id: 2, category: "mains", name: "Lemongrass Chicken", khName: "មាន់គល់ស្លឹកគ្រៃ", description: "Grilled chicken, fragrant lemongrass, jasmine rice & greens.", khDescription: "មាន់អាំងគល់ស្លឹកគ្រៃ បាយផ្កាម្លិះ និងបន្លែស្រស់។", price: 10.5, image: "photo-1532550907401-a500c9a57435", tag: "House favorite", khTag: "ម្ហូបពេញចិត្ត", vegetarian: false },
      { id: 3, category: "mains", name: "Green Garden Bowl", khName: "បាយចានបន្លែបៃតង", description: "Crunchy seasonal greens, rice, herbs & a bright lime dressing.", khDescription: "បន្លែតាមរដូវ បាយ ឱសថស្រស់ៗ និងទឹកក្រូចឆ្មារ។", price: 9.5, image: "photo-1512621776951-a57141f2eefd", tag: "Plant based", khTag: "បន្លែសុទ្ធ", vegetarian: true },
      { id: 4, category: "starters", name: "Green Mango Salad", khName: "ញាំស្វាយខ្ចី", description: "Shredded green mango, toasted peanuts, fresh herbs & chili.", khDescription: "ស្វាយខ្ចីហាន់ល្អិត សណ្តែកដីលីង ឱសថស្រស់ និងម្ទេស។", price: 6.5, image: "photo-1512621776951-a57141f2eefd", tag: "Fresh & zesty", khTag: "ស្រស់ឆ្ងាញ់", vegetarian: true },
      { id: 5, category: "starters", name: "Crispy Spring Rolls", khName: "ណែមបំពង", description: "Golden, crunchy rolls with vegetables and sweet chili dip.", khDescription: "ណែមបន្លែបំពងពណ៌មាស ជាមួយទឹកជ្រលក់ម្ទេសផ្អែម។", price: 5.5, image: "photo-1544025162-d76694265947", tag: "Crispy favorite", khTag: "ពេញនិយម", vegetarian: true },
      { id: 6, category: "drinks", name: "Tamarind Cooler", khName: "ភេសជ្ជៈអម្ពិល", description: "Sweet-tart tamarind, a squeeze of lime & plenty of ice.", khDescription: "អម្ពិលផ្អែមជូរ ក្រូចឆ្មារស្រស់ និងទឹកកក។", price: 4.5, image: "photo-1544145945-f90425340c7e", tag: "House made", khTag: "ធ្វើផ្ទាល់", vegetarian: true },
      { id: 7, category: "drinks", name: "Iced Khmer Coffee", khName: "កាហ្វេខ្មែរទឹកកក", description: "Rich local coffee poured over ice with a touch of sweet milk.", khDescription: "កាហ្វេខ្មែរឈ្ងុយឆ្ងាញ់ លាយទឹកកក និងទឹកដោះគោផ្អែម។", price: 3.5, image: "photo-1461023058943-07fcbe16d735", tag: "Local love", khTag: "រសជាតិក្នុងស្រុក", vegetarian: true },
      { id: 8, category: "desserts", name: "Mango Sticky Rice", khName: "បាយដំណើបស្វាយ", description: "Sweet coconut sticky rice, ripe mango & toasted sesame.", khDescription: "បាយដំណើបខ្ទិះដូង ស្វាយទុំ និងល្ងលីង។", price: 6, image: "photo-1488477181946-6428a0291777", tag: "Sweet ending", khTag: "បង្អែម", vegetarian: true },
      { id: 9, category: "desserts", name: "Coconut Pandan Cake", khName: "នំខ្ទិះដូងស្លឹកតយ", description: "Soft pandan sponge with silky coconut cream.", khDescription: "នំស្លឹកតយទន់ ជាមួយក្រែមខ្ទិះដូងឈ្ងុយ។", price: 5.5, image: "photo-1578985545062-69928b1d9587", tag: "Made in-house", khTag: "ធ្វើផ្ទាល់", vegetarian: true }
    ];

    const translations = {
      en: {
        open: "OPEN TODAY · 9 AM – 10 PM", heroTag: "A little taste of Cambodia", heroTitle: "Fresh flavors,<br>made with heart.",
        heroText: "A modern take on the dishes we grew up loving. Local ingredients, bold Khmer flavors, and a seat waiting just for you.",
        exploreMenu: "Explore our menu", guestFavorite: "A guest favorite in Phnom Penh", localIngredients: "Locally sourced", localSub: "Fresh from the market, every day",
        madeWithCare: "Made with care", careSub: "Thoughtful food, always", quickFresh: "Quick & fresh", quickSub: "Prepared fresh when you order",
        ourMenu: "Good food, good mood", menuTitle: "Our menu", searchLabel: "Search dishes", searchPlaceholder: "Find your favorite...",
        emptyState: "No dishes found. Try another search.", visitUs: "Come say hello", visitTitle: "A good meal is better together.",
        visitText: "Find us in the heart of Phnom Penh. We'd love to have you.", getDirections: "Get directions",
        footer: "Good food, made with heart in Phnom Penh.", yourOrder: "YOUR ORDER", cartTitle: "Your basket",
        subtotal: "Subtotal", checkoutNote: "Dine-in orders only. Please place your order with our team.", doneButton: "Done",
        add: "Add", categories: { all: "All dishes", starters: "Starters", mains: "Mains", drinks: "Drinks", desserts: "Desserts" },
        vegetarian: "Vegetarian", added: "Added to your order", emptyCart: "Your basket is looking a little empty.", remove: "Remove"
      },
      km: {
        open: "បើកថ្ងៃនេះ · ៩ ព្រឹក – ១០ យប់", heroTag: "រសជាតិខ្មែរបែបទំនើប", heroTitle: "រសជាតិស្រស់ថ្មី<br>ចម្អិនដោយចិត្ត។",
        heroText: "ម្ហូបដែលយើងស្រឡាញ់ តាមបែបទំនើប។ គ្រឿងផ្សំក្នុងស្រុក រសជាតិខ្មែរឈ្ងុយឆ្ងាញ់ និងកន្លែងអង្គុយកំពុងរង់ចាំអ្នក។",
        exploreMenu: "មើលមុខម្ហូប", guestFavorite: "ភោជនីយដ្ឋានពេញនិយមនៅភ្នំពេញ", localIngredients: "គ្រឿងផ្សំក្នុងស្រុក", localSub: "ស្រស់ពីផ្សាររៀងរាល់ថ្ងៃ",
        madeWithCare: "ចម្អិនដោយយកចិត្តទុកដាក់", careSub: "ម្ហូបល្អ មានគុណភាព", quickFresh: "រហ័ស និងស្រស់", quickSub: "ចម្អិនស្រស់ពេលអ្នកកម្មង់",
        ourMenu: "ម្ហូបឆ្ងាញ់ អារម្មណ៍ល្អ", menuTitle: "មុខម្ហូបរបស់យើង", searchLabel: "ស្វែងរកមុខម្ហូប", searchPlaceholder: "ស្វែងរកម្ហូបដែលអ្នកចូលចិត្ត...",
        visitText: "ជួបគ្នានៅកណ្តាលទីក្រុងភ្នំពេញ។ យើងរីករាយស្វាគមន៍អ្នក។", getDirections: "មើលផ្លូវ",
        footer: "ម្ហូបឆ្ងាញ់ ចម្អិនដោយចិត្ត នៅភ្នំពេញ។", yourOrder: "ការកម្មង់របស់អ្នក", cartTitle: "កន្ត្រករបស់អ្នក",
        subtotal: "សរុបរង", checkoutNote: "សម្រាប់អង្គុយញ៉ាំក្នុងហាង។ សូមកម្មង់ជាមួយបុគ្គលិករបស់យើង។", doneButton: "រួចរាល់",
        add: "បន្ថែម", categories: { all: "មុខម្ហូបទាំងអស់", starters: "ម្ហូបក្លែម", mains: "ម្ហូបចម្បង", drinks: "ភេសជ្ជៈ", desserts: "បង្អែម" },
        vegetarian: "បន្លែសុទ្ធ", added: "បានបន្ថែមក្នុងការកម្មង់", emptyCart: "កន្ត្រករបស់អ្នកនៅទទេ។", remove: "លុបចេញ"
      }
    };

    let language = "en";
    let activeCategory = "all";
    const cart = new Map();
    const categoryKeys = ["all", "starters", "mains", "drinks", "desserts"];
    const money = amount => `$${amount.toFixed(2)}`;
    const t = key => translations[language][key];

    function renderCategories() {
      const list = document.getElementById("category-list");
      list.innerHTML = categoryKeys.map(key => `
        <button type="button" data-category="${key}" class="shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:text-sm ${activeCategory === key ? "bg-ink text-white" : "border border-ink/10 bg-white text-muted hover:border-ink/30 hover:text-ink"}">
          ${translations[language].categories[key]}
        </button>`).join("");
    }

    function dishCard(dish) {
      const name = language === "km" ? dish.khName : dish.name;
      const description = language === "km" ? dish.khDescription : dish.description;
      const tag = language === "km" ? dish.khTag : dish.tag;
      const imageUrl = `https://images.unsplash.com/${dish.image}?auto=format&fit=crop&w=760&q=80`;
      return `<article class="food-card overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
        <div class="relative h-48 overflow-hidden bg-[#e9eddd] sm:h-52">
          <img class="food-image h-full w-full object-cover" src="${imageUrl}" alt="${name}" loading="lazy">
          <span class="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-ink backdrop-blur-sm">${tag}</span>
          ${dish.vegetarian ? `<span class="absolute right-3 top-3 rounded-full bg-[#e8f0da] px-2.5 py-1.5 text-[10px] font-semibold text-leaf">${t("vegetarian")}</span>` : ""}
        </div>
        <div class="p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div><h3 class="font-display text-lg font-semibold leading-snug">${name}</h3><p class="mt-1.5 min-h-10 text-xs leading-5 text-muted">${description}</p></div>
            <span class="shrink-0 pt-0.5 text-sm font-bold">${money(dish.price)}</span>
          </div>
          <button type="button" data-add="${dish.id}" class="mt-4 inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold transition hover:border-ink hover:bg-ink hover:text-white">
            <span class="text-base leading-none">+</span>${t("add")}
          </button>
        </div>
      </article>`;
    }

    function renderMenu() {
      const query = document.getElementById("search-input").value.trim().toLocaleLowerCase();
      const filtered = dishes.filter(dish => {
        const matchesCategory = activeCategory === "all" || dish.category === activeCategory;
        const searchable = `${dish.name} ${dish.khName} ${dish.description} ${dish.khDescription}`.toLocaleLowerCase();
        return matchesCategory && searchable.includes(query);
      });
      document.getElementById("menu-grid").innerHTML = filtered.map(dishCard).join("");
      document.getElementById("empty-state").classList.toggle("hidden", filtered.length !== 0);
    }

    function renderCart() {
      const count = [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
      const total = [...cart.entries()].reduce((sum, [id, quantity]) => sum + dishes.find(dish => dish.id === id).price * quantity, 0);
      const countBadge = document.getElementById("cart-count");
      countBadge.textContent = count;
      countBadge.classList.toggle("hidden", count === 0);
      document.getElementById("cart-total").textContent = money(total);
      const items = document.getElementById("cart-items");
      if (count === 0) {
        items.innerHTML = `<p class="py-12 text-center text-sm text-muted">${t("emptyCart")}</p>`;
        return;
      }
      items.innerHTML = [...cart.entries()].map(([id, quantity]) => {
        const dish = dishes.find(item => item.id === id);
        const name = language === "km" ? dish.khName : dish.name;
        return `<div class="flex items-center justify-between gap-3 border-b border-ink/5 py-4">
          <div class="min-w-0"><p class="truncate text-sm font-semibold">${name}</p><p class="mt-1 text-xs text-muted">${money(dish.price)} · ${quantity} ×</p></div>
          <div class="flex shrink-0 items-center gap-2">
            <button type="button" data-quantity="${id}" data-change="-1" class="grid h-8 w-8 place-items-center rounded-full border border-ink/10 text-sm hover:bg-white" aria-label="Decrease quantity">−</button>
            <span class="w-4 text-center text-xs font-semibold">${quantity}</span>
            <button type="button" data-quantity="${id}" data-change="1" class="grid h-8 w-8 place-items-center rounded-full border border-ink/10 text-sm hover:bg-white" aria-label="Increase quantity">+</button>
          </div>
        </div>`;
      }).join("");
    }

    function setLanguage(nextLanguage) {
      language = nextLanguage;
      document.documentElement.lang = language;
      document.getElementById("language-toggle").textContent = language === "en" ? "ខ្មែរ" : "English";
      document.querySelectorAll("[data-i18n]").forEach(element => {
        const value = t(element.dataset.i18n);
        if (value) element.innerHTML = value;
      });
      document.querySelectorAll("[data-placeholder]").forEach(element => {
        element.placeholder = t(element.dataset.placeholder);
      });
      renderCategories();
      renderMenu();
      renderCart();
    }

    function setCartOpen(open) {
      const panel = document.getElementById("cart-panel");
      const backdrop = document.getElementById("cart-backdrop");
      panel.classList.toggle("translate-x-full", !open);
      panel.setAttribute("aria-hidden", String(!open));
      backdrop.classList.toggle("hidden", !open);
      document.body.classList.toggle("overflow-hidden", open);
      if (open) document.getElementById("cart-close").focus();
    }

    document.getElementById("language-toggle").addEventListener("click", () => setLanguage(language === "en" ? "km" : "en"));
    document.getElementById("category-list").addEventListener("click", event => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      activeCategory = button.dataset.category;
      renderCategories();
      renderMenu();
    });
    document.getElementById("menu-grid").addEventListener("click", event => {
      const button = event.target.closest("[data-add]");
      if (!button) return;
      const id = Number(button.dataset.add);
      cart.set(id, (cart.get(id) || 0) + 1);
      renderCart();
      button.innerHTML = `<span class="text-base leading-none">✓</span>${t("added")}`;
      window.setTimeout(() => {
        if (button.isConnected) button.innerHTML = `<span class="text-base leading-none">+</span>${t("add")}`;
      }, 1100);
    });
    document.getElementById("search-input").addEventListener("input", renderMenu);
    document.getElementById("cart-items").addEventListener("click", event => {
      const button = event.target.closest("[data-quantity]");
      if (!button) return;
      const id = Number(button.dataset.quantity);
      const quantity = (cart.get(id) || 0) + Number(button.dataset.change);
      if (quantity <= 0) cart.delete(id);
      else cart.set(id, quantity);
      renderCart();
    });
    document.getElementById("cart-open").addEventListener("click", () => setCartOpen(true));
    document.getElementById("cart-close").addEventListener("click", () => setCartOpen(false));
    document.getElementById("done-order").addEventListener("click", () => setCartOpen(false));
    document.getElementById("cart-backdrop").addEventListener("click", () => setCartOpen(false));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") setCartOpen(false);
    });
    document.getElementById("year").textContent = new Date().getFullYear();
    setLanguage("en");