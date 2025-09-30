# serviceManagerApp2
serviceManagerApp2
# Service Manager – README

## 1. Project Overview

* React frontend integrated with WordPress backend.
* WordPress provides REST API endpoints for **Services** (CPT) and **Blog Posts**.
* React app fetches this data to display on **Services** and **Blog** pages.

## 2. Local WordPress Setup

1. **Install XAMPP** and start **Apache** & **MySQL**.
2. Download WordPress and extract to `D:/XAMPP/htdocs/WP-SM/wordpress/`.
3. Create database `service_manager` using **phpMyAdmin**.
4. Run WordPress setup (`wp-admin`) and create admin user.

## 3. WordPress Configuration

1. **Install Plugins:**

   * **ACF (Advanced Custom Fields)**
   * **CPT UI (Custom Post Type UI)**
   * **ACF to REST API** (to expose custom fields in API)

2. **Create Custom Post Type:** `services` via CPT UI

3. **Add Custom Fields for Services:**

   * Price (Number/Text)
   * Category (Text/Select)
   * Image (Return URL)

4. **Add Sample Content:**

   * Create Service posts with title, description, price, category, image
   * Create Blog posts using default WordPress Posts

## 4. REST API Endpoints

* **Services API:**
  `http://localhost:8888/WP-SM/wordpress/wp-json/wp/v2/services`
* **Blog Posts API:**
  `http://localhost:8888/WP-SM/wordpress/wp-json/wp/v2/posts`

> Ensure ACF fields return proper values (image URL, price, category).

## 5. React App Integration

1. Fetch **Services** and **Blog posts** from WordPress API using `axios`.
2. Display data in components: cards for Services, Blog list, and Blog details.
3. Use `dangerouslySetInnerHTML` for HTML content (price, blog content).
4. Filters implemented for category and price in Services page, and search in Blog page.
5. Add loading spinner while fetching API data.

## 6. How to Run

1. Start XAMPP → Apache & MySQL.
2. Open WordPress Admin: `http://localhost:8888/WP-SM/wordpress/wp-admin`.
3. Start React app:

   ```
   ```

npm install
npm start

```
4. React app will fetch data from WordPress endpoints and display Services and Blog posts.

## 7. Notes
- Only mock submission for contact form (no backend required).
- Optional security headers implemented via HTML meta tags.
- CORS enabled for React dev server (`localhost:5173`) to access WordPress APIs.

```
