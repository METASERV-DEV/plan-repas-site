// Adresse e-mail assemblée dans le navigateur pour limiter le spam.
// >>> Modifier uniquement ces deux lignes si besoin <<<
var utilisateur = "contact";
var domaine = "plan-repas.fr";
// --------------------------------------------------------------
var adresse = utilisateur + "@" + domaine;
document.querySelectorAll(".js-email").forEach(function (el) {
  var a = document.createElement("a");
  a.href = "mailto:" + adresse;
  a.textContent = adresse;
  el.replaceChildren(a);
});
