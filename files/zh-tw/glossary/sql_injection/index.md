---
title: SQL 注入
slug: Glossary/SQL_Injection
---

**SQL 注入（SQL injection）**利用了網路程式（Web apps）的錯誤輸入。駭客可以透過執行後端資料庫的網路程式，惡意繞過 SQL 指令。

SQL 注入能在未授權的情況下，直接從資料庫訪問資料庫與檢索信息。許多數據洩露肇因於 SQL 注入。

[![](sql_inj_xss.gif)](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## 如何做動

![](updates_loginscreen.png)

在輸入 username （用戶名）與 password （密碼）後，GUI 背後的 SQL 查詢會這樣工作：

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

假設用戶在 username 欄位輸入了 admin 還在 password 欄位輸入了 passwd123，接著按了下面的 Log in（登入）， SQL 查詢會這樣運作：

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

如果驗證正確，用戶就可以登入，是個很簡單（所以很不安全）的機制。駭客利用者這種不安全，獲取未經授權的訪問。

駭客使用一種稱為 Magical String 的簡單字串，例如：

**Username: _admin_**

**Password: _anything 'or'1'='1_**

在按下 login 按鈕以後，SQL 查詢會這樣運作：

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

仔細檢查一下查詢密碼的部分。

```sql
Password=' anything 'or'1'='1 '
```

密碼不是 anything，因此 password=anything 會回傳 FALSE（錯誤）。但 '1'='1' 是正確的宣告，所以會回傳 TRUE（正確）。最後，透過 OR （或）運算符，FALSE OR TRUE 的比較結果是 TRUE，認證因而成功通過。只要一點簡單的字串（Magical String）整個資料庫就會被洩漏。

## 如何避免

在執行用戶的憑證查詢前，先做如下的改變：

```sql
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

藉由 (1) 所有輸入字串的單引號 ' 取代成雙引號 "，還有 (2) 在每個 ' 之前加上 /。 修正後的 Magical String 不能繞過驗證，並使你的資料庫保持安全。

## 了解詳情

### 基本知識

- 維基百科的 [SQL 資料隱碼攻擊](https://zh.wikipedia.org/wiki/SQL資料隱碼攻擊)
- OWASP (Open Web Application Security Project) [解釋 SQL 注入](https://www.owasp.org/index.php/SQL_Injection)
