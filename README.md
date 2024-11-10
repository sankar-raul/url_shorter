# 🌐 URL Shortener

Welcome to my URL Shortening service! Easily shorten long URLs to make them more manageable and shareable. ✨

## 🚀 Features:
- **Easy to Use**: Paste your long URL and get a short link in seconds! ⏱️
- **Free**: No cost, no hidden fees. 💸
- **Trackable (Coming Soon)**: Monitor your shortened URLs and their performance. 📊
- **Customizable (Coming Soon)**: Personalize your short links with a custom alias! 📝

---

**⚠️ Disclaimer:**  
This URL shortening service is currently hosted at [https://url-shorter-5b7e.onrender.com/](https://url-shorter-5b7e.onrender.com/), which uses a longer domain. 🔗 For optimal use and a better user experience, a custom short domain name is recommended to fully benefit from the URL shortening feature. ✂️

---

## 🖥️ Run on Your Local Machine

To run the URL Shortener on your local machine, follow these instructions:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/sankar-raul/url_shorter.git
    ```

2. **Change to the project directory:**
    ```bash
    cd url_shorter
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Set up the database:**
    - Run the `dbsetup.sql` file to set up the database schema. You can do this using a tool like MySQL Workbench, phpMyAdmin, or the MySQL command line.
    - Or, using the terminal (ensure that MySQL is installed):
    - For powershell
    using the Mac | Linux | cmd terminal (ensure that MySQL is installed):
    ```bash
    mysql -u <your_database_username> -p -e 'source ./dbsetup.sql'
    ```
    
    Replace `<your_database_username>` with your actual MySQL username.

5. **Set up the environment variables:**
    Create a `.env` file in the root directory with the following content:

    ```env
    USER=<your_database_username>
    HOST=<your_database_host>
    PASSWORD=<your_database_password>
    DB=url_shorter
    PORT=8080  # Port for the URL web service
    DBPORT=<your_database_port>  # Optional: Port for the database connection, if required
    ```

    Replace `<your_database_username>`, `<your_database_host>`, `<your_database_password>`, and `<your_database_port>` with your actual database credentials and port number.

6. **Run the app in development mode:**
    ```bash
    npm run dev
    ```

7. **Run the app in production mode:**
    ```bash
    npm run production
    ```

8. **Access the app:**
   Once running, open your browser and go to:  
   `http://localhost:8080`

By following these instructions, you can set up and run the URL Shortener on your local machine. If you encounter any issues, please check the configuration and ensure that all dependencies are correctly installed.

---

**Developed by:**  
[Sankar Raul](https://github.com/sankar-raul)
