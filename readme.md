NANO - jQuery Template Engine
=============================

Assuming you have following JSON response:

<pre>
user = {
  user: {
    login: "tomek",
    first_name: "Thomas",
    last_name: "Mazur",
    account: {
      status: "active",
      expires_at: "2009-12-31"
    }
  }
}  
</pre>

you can make just:

<code>
  $.nano("&lt;p&gt;Hello {user.first_name} {user.last_name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt;&lt;/p&gt;", user)
</code>

<code>
  &lt;p&gt;Hello Thomas! Your account is &lt;strong&gt;active&lt;/strong&gt;&lt;/p&gt;
</code>
  