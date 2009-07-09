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

<pre>
$.nano("<p>Hello {user.first_name} {user.last__name}! Your account is <strong>{user.account.status}</strong></p>", user)
</pre>

<pre>
  <p>Hello Thomas! Your account is <strong>active</strong></p>
</pre>
  