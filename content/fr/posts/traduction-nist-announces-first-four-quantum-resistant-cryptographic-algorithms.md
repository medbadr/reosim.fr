---
title: "Traduction Nist Announces First Four Quantum Resistant Cryptographic Algorithms"
image: /uploads/images/posts/nist-algorithmes-cryptographiques.png
date: 2022-05-07
tags:
  - cryptographie
  - algorithmique
draft: false
---

*Traduction (libre) en français de l'article original publié en anglais sous le titre "[NIST Announces First Four Quantum-Resistant Cryptographic Algorithms](https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms)"*


*Les quatre premiers algorithmes annoncés par le NIST pour la cryptographie post-quantique sont basés sur des treillis structurés et des fonctions de hachage, deux familles de problèmes mathématiques qui pourraient résister à l'attaque d'un ordinateur quantique.
Crédit : N. Hanacek/NIST*

GAITHERSBURG, Md. - Le National Institute of Standards and Technology (NIST) du ministère américain du commerce a choisi le premier groupe d'outils de cryptage conçus pour résister à l'assaut d'un futur ordinateur quantique.
L'informatique post-quantique pourrait casser la sécurité utilisée pour protéger la vie privée dans les systèmes numériques dont nous dépendons tous les jours, comme les services bancaires en ligne et les logiciels de messagerie.
Les quatre algorithmes de cryptage sélectionnés feront partie de la norme cryptographique post-quantique du NIST, qui devrait être finalisée dans environ deux ans.

"L'annonce d'aujourd'hui est une étape importante dans la sécurisation de nos données sensibles contre de futures cyberattaques provenant d'ordinateurs quantiques", a déclaré la secrétaire au commerce Gina M. Raimondo. "Grâce à l'expertise du NIST et à son engagement en faveur des technologies de pointe, nous sommes en mesure de prendre les mesures nécessaires pour sécuriser les informations électroniques afin que les entreprises américaines puissent continuer à innover tout en conservant la confiance de leurs clients."

L'annonce fait suite à un projet de six ans lancé par le NIST, qui a demandé [en 2016](https://www.nist.gov/news-events/news/2016/12/nist-asks-public-help-future-proof-electronic-information) aux cryptographes du monde entier de concevoir puis de faire passer au crible des méthodes de cryptage capables de résister à une attaque d'un futur ordinateur quantique plus puissant que les machines disponibles aujourd'hui et comparativement plus limitées. Cette sélection lance la dernière phase [du projet de normalisation de la cryptographie post-quantique de l'agence](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography/Post-Quantum-Cryptography-Standardization).

"Le NIST est constamment tourné vers l'avenir pour anticiper les besoins de l'industrie américaine et de la société dans son ensemble.
Lorsqu'ils seront construits, les ordinateurs quantiques constitueront une menace sérieuse pour nos systèmes d'information", a déclaré le sous-secrétaire au commerce pour les normes et la technologie et directeur du NIST, Laurie E. Locascio. "Notre programme de cryptographie post-quantique a fait appel aux plus grands esprits de la cryptographie - dans le monde entier - pour produire ce premier groupe d'algorithmes résistants au quantique, ce qui qui débouchera sur une norme qui augmentera considérablement la sécurité de nos informations numériques."

Quatre autres algorithmes sont encore à l'étude, le NIST annoncera les prochains finalistes à une date ultérieure. Afin de disposer d'une large variété de solutions de défense, le NIST a décidé de procèder en deux étapes. Comme les cryptographes [l'avaient anticipés dès le début du projet](https://www.nist.gov/news-events/news/2016/04/nist-kicks-effort-defend-encrypted-data-quantum-computer-threat), une grande variétés de systèmes utilisent le cryptage. En conséquence, pour être efficient, le projet devra offrir plusieurs solutions adaptées aux différentes situations possibles avec des approches variées et proposer plusieurs algorithmes au cas où l'un d'entre eux s'avérerait vulnérable.

> "Notre programme de cryptographie post-quantique a mobilisé les plus grands esprits de la cryptographie - dans le monde entier - pour produire ce premier groupe d'algorithmes résistants au quantique qui débouchera sur une norme qui augmentera considérablement la sécurité de nos informations numériques." -Laurie E. Locascio, directeur du NIST

Le cryptage utilise les mathématiques pour protéger les informations électroniques sensibles, notamment les sites web sécurisés sur lesquels nous naviguons et les courriers électroniques que nous envoyons. Les systèmes de [cryptage à clé publique](https://csrc.nist.gov/glossary/term/public_key_cryptography) qui sont largement utilisés garantissent que ces sites web et ces messages sont inaccessibles à des tiers indésirables. Ces sécurités reposent sur des problèmes mathématiques que même les ordinateurs conventionnels les plus rapides trouvent insolubles.

Cependant, un ordinateur quantique suffisamment performant et basé sur une nouvelle technologie pourrait résoudre rapidement ces équations mathématiques. Les systèmes de cryptage serait alors mis en échec. Pour éviter ce risque, les quatre algorithmes post-quantique reposent sur des problèmes mathématiques que les ordinateurs conventionnels et de surcroît quantiques devraient avoir du mal à résoudre, ce qui permet de protéger la vie privée d'aujourd'hui et de demain.

Les algorithmes sont conçus pour deux tâches principales : le cryptage général, utilisé pour protéger les informations échangées sur un réseau public et les signatures numériques, utilisées pour l'authentification des identités.

Les quatre algorithmes ont été créés par des experts collaborant dans plusieurs pays et institutions. 

**Pour le cryptage général**, utilisé lorsque nous accédons à des sites web sécurisés, le NIST a sélectionné l'algorithme [CRYSTALS-Kyber](https://pq-crystals.org/kyber/index.shtml). Parmi ses avantages figurent des clés de chiffrement relativement petites échangeables entre deux parties facilement, ainsi que qu'une rapidité d'exécution.

**Pour les signatures numériques**, souvent utilisées lorsque nous devons vérifier des identités lors d'une transaction numérique ou signer un document à distance, le NIST a sélectionné les trois algorithmes [CRYSTALS-Dilithium](https://pq-crystals.org/dilithium/index.shtml), [FALCON](https://falcon-sign.info/) et [SPHINCS+](https://sphincs.org/) (lire "Sphincs plus").
Les examinateurs ont noté la grande efficacité des deux premiers, et le NIST recommande CRYSTALS-Dilithium comme algorithme principal, avec FALCON pour les applications qui nécessitent des signatures plus petites que celles que Dilithium peut fournir.
Le troisième, SPHINCS+, est un peu plus gros et plus lent que les deux autres, mais il est précieux en tant que sauvegarde pour une raison principale : il est basé sur une approche mathématique différente des trois autres sélections du NIST.

Trois des algorithmes sélectionnés sont basés sur une famille de problèmes mathématiques appelés treillis structurés, tandis que SPHINCS+ utilise des fonctions de hachage. Les quatre autres algorithmes encore à l'étude sont conçus pour le cryptage général et n'utilisent pas de treillis structurés ou de fonctions de hachage dans leurs approches. 

Pendant que la norme continue d'être élaborée, le NIST encourage les experts en sécurité à explorer de nouveaux algorithmes et à réfléchir à la manière dont leurs applications les utiliseront, sans toutefois les intégrer dès à présent dans leurs systèmes, car les algorithmes pourraient être légèrement modifiés avant la finalisation de la recommandation finale.

Pour anticiper, les utilisateurs peuvent faire l'inventaire des applications utilisant le système de clé publique qui devront être remplacées avant l'apparition d'ordinateurs quantiques. Ils peuvent également avertir leurs services informatiques et leurs fournisseurs du changement à venir.
Il est aussi possible de participer au projet d'accompagnement à la migration vers la cryptographie post-quantique en consultant [la page du projet du National Cybersecurity Center of Excellence du NIST](https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms=).  

Tous les algorithmes sont disponibles [sur le site du NIST](https://csrc.nist.gov/Projects/post-quantum-cryptography/post-quantum-cryptography-standardization/round-3-submissions).


*Publié le 5 juillet 2022, mis à jour le 7 juillet 2022*

