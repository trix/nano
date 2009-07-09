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
  $.nano("<p>Hello {user.first_name} {user.last__name}! Your account is <strong>{user.account.status}</strong></p>", user)
</code>

<code>
  <p>Hello Thomas! Your account is <strong>active</strong></p>
</code>
  