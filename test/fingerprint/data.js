/* eslint-disable quotes */
/* eslint-disable no-mixed-spaces-and-tabs */
//The following was generated from this script run from the console on production database
//copy(Object.fromEntries(Object.entries(DEBUG_STORE.getState().data.cards).filter(entry => entry[1].card_type == 'content' && entry[1].created ? entry[1].created.toDate() < Date.parse('2020-03-20') : false).map(entry => [entry[0], Object.fromEntries(Object.entries(entry[1]).filter(entry => entry[0] in {'body': true, 'title': true}))])))

export const BASE_DATA = {
	"02af83": {
	  "title": "Strategies can assume existing infrastructure for free",
	  "body": "<p>If the infrastructure already exists (ideally, because it's useful for other things, but even if it was over-built before erroneously), you can assume it exists for free and your strategy doesn't have to motivate why it should be built. The world is configured in a way that you have it, and that's great.</p>\n<p>People often intuitively want to motivate the entire strategy from a zero state, with enough value to motivate creating the existing infrastructure. But that's too much burden, and an unnecessarily high bar. If you're lucky enough to have the infrastructure, you have a powerful wind at your back, and you should use it!</p>\n"
	},
	"380be6": {
	  "body": "<p>Obama?</p>\n",
	  "title": "Be boring in one place so you can be interesting in another"
	},
	"48ac50": {
	  "title": "If you're surprised, investigate",
	  "body": "<p>A general principle to live by. Related to <card-link card=\"g4871092f30_0_1581\">rate of surprise</card-link>, and others.</p>\n"
	},
	"59446f": {
	  "body": "<p>Most strategies, fundamentally, are about some (ideally compounding) machinery that harvests the energy of things rolling down a gradeint.</p>\n<p>That gradient could be user motivation, network effects, etc, but they create a gradient that users or agents roll down, and the strategy captures that value.</p>\n",
	  "title": "Harvesting the energy of things rolling down a gradient"
	},
	"62d47c": {
	  "body": "<p>Since power begets powerIn humans, death as a term limit on wealth accrual (Josh)</p>\n",
	  "title": "Term limits help control for all-powerful entities"
	},
	"79fbda": {
	  "body": "<p>Infrastructure of all types.</p>\n<p>It's useful if the things you can reasonably expect to happen in the future will get continuously cheaper to accomplish (ideally at an accelerating rate) over time.&nbsp;</p>\n<p>For example, a general, well architected technical foundation makes it easy to add features and keeps maintenence burden low, allowing the units of engineering effort to be spent on new features, not fighting fires.</p>\n",
	  "title": "Infrastructure is useful if things get cheaper over time"
	},
	"873adf": {
	  "body": "<ul>\n\t<li>I love diving into complex problem spaces and distilling insights into essays</li>\n\t<li>Writing an essay takes a ton of time because they are final and unchanging</li>\n\t<li>Many ideas are interrelated and build on each other, and as I write one essay I start organizing thoughts for others. The result is either a) literally 100 medium draft post outlines collecting dust, or b) bloated kitchen-sink essays that try to do too much.</li>\n\t<li>Worse, ideas tend to develop over time as I learn more, meaning that essays from years ago slowly rot and become less relevant to the whole body of essays</li>\n\t<li>The solution is this, a living compendium of developing insights.</li>\n\t<li><em>All content in this presentation is my own personal opinion and does not reflect the opinion of my employer.</em></li>\n</ul>\n",
	  "title": "Why does this exist?"
	},
	"96b009": {
	  "title": "Path dependence is the most important reason why",
	  "body": "<p>It's tempting to believe that certain companies and things are successful because they were brilliant and could see the future, but in practice path dependence--a group of good-enough people with the right idea whose time had come due to a confluence of factors outside their control--explains most truly successful or revolutionary ideas.</p>\n<p>This is depressing because it implies that making forward predictions is hard.</p>\n<p>Parallel of \"systems matter more than individuals\"</p>\n"
	},
	"a779db": {
	  "title": "How to consume this",
	  "body": "<ul>\n\t<li>Check out the <card-link href=\"https://medium.com/@komorama/how-to-use-thecompendium-cards-ee8660b16b11\"><strong>Medium post</strong></card-link> that explains all of the features.</li>\n\t<li>The cards are all individual ideas with a main point and then supporting reasoning</li>\n\t<li>The cards are heavily interlinked, building upon other cards in a web.</li>\n\t<li><card-link card=\"g487aed6370_0_25\">Green links</card-link> are to other cards; <card-link href=\"https://medium.com/@komorama/the-self-sustaining-flame-84326d2e1645\">purple links</card-link> are to external resources.</li>\n\t<li>Don’t try to read back to front; a <strong>choose-your-own-adventure style</strong> is best</li>\n\t<li>Cards are organized in sections from left to right by how “baked” they are</li>\n\t<li>You should comment and engage often (Yes, I mean <strong>you</strong>, even if I don’t know you). Questions / critiques are welcome, as are tactical suggestions like adding a missing inter-linking between cards.</li>\n\t<li>This started life as a Google Presentation but outgrew it as more cards were added</li>\n\t<li>The code for the web app is <card-link href=\"https://github.com/jkomoros/complexity-compendium\">available on GitHub</card-link> and can be easily forked to start your own web of cards. Comments and pull requests welcome!</li>\n\t<li>The web app is under active development. Please suggest additional features!</li>\n</ul>\n"
	},
	"ad8cc5": {
	  "title": "Finding footholds is key to new problem spaces",
	  "body": "<p>Often it can be tempting to boil the ocean.</p>\n<p>But in practice if you're trying to find and climb a new S-curve, then the most important thing is identifying a foothold--a small self-sustaining flame that works on its own, and that has a rich adjacent possible, where you can then follow the gradient downwards into it.</p>\n<p>But footholds don't look like much, especially at the beginning, and so it's tempting to ignore them or dismiss them as \"not thinking big enough\"</p>\n"
	},
	"b628ab": {
	  "title": "Who is to blame for this?",
	  "body": "<h2>Alex Komoroske</h2><h2><strong>alex@komoroske.com</strong></h2>"
	},
	"b82320": {
	  "body": "<p>If you find a <card-link card=\"ad8cc5\">foothold</card-link>, you want to make sure that you have a gradient to descend to grow it.</p>\n<p>If you have a natural network effect (e.g. a social network) then you're golden; all you have to do after you find your foothold is a) make sure you don't lose your existing users (which should be easy because the logic of the network effect should hold them by default), while b) focusing on the marginal users--the users at the frontier, your adjacent possible.&nbsp;</p>\n<p>Bonus points if you have some natural force where people on the margin all have a consistent pull into the user pool, for example because you started with high-prestige users and every person at the frontier would rather be in the \"in\" group than the \"outside\" group.</p>\n",
	  "title": "If you have a foothold and a network effect you're golden"
	},
	"ba0493": {
	  "title": "What is this?",
	  "body": "<h2>My Medium drafts folder</h2><h2><strong>organized into a web of interlinked “index cards”</strong></h2><h2>posted publicly</h2>"
	},
	"c-019-dbf233": {
	  "title": "Platforms all the way down",
	  "body": "<p>The word \"platform\" is typically used to define a set of APIs, but the actual concept is more general and can be clarifying even when applied to problems not typically thought of as platforms.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\"><strong>A platform is any layered system that allows other agents an interface point with the system</strong>.</span></p>\n<p>Platforms typically are built on top of other platforms, all the way down to the actual instructions that run on processors (although the <card-link card=\"c-470-faf007\">lower levels tend to get less and less interesting</card-link>). That means that when trying to frame a platform problem, it's important to figure out where the bounds of the system is. (In the same way you make <card-link card=\"c_428_bab903\">a similar decision when consider any systems&nbsp; framing</card-link>).</p>\n<p>Typically you choose to define a platform based on <strong>which parts you can most directly write code for</strong>, excluding layers that are written by other organizations. But in other cases your analysis might need to take a broader view, and consider multiple platforms as one bigger meta-platform.</p>\n"
	},
	"c-020-abe755": {
	  "body": "<p>If you think that you've mastered the space you're in (<card-link card=\"c-571-aeb885\">you haven't!</card-link>) then you'll keep on doing more of what you think works, even as the <card-link card=\"c-202-daa014\">bottom rots out under you</card-link>, until it fails spectacularly.</p>\n<p>If you aren't in the growth mindset, as you go faster and faster down the drain you'll be more and more <card-link card=\"c-490-dbd062\">existentially scared, making you less and less open to growth</card-link>, making it go faster. <strong>Only when you hit rock bottom and fail spectacularly will you be able to realize you need to change and be open to growth</strong>.</p>\n<p>If you see someone spiraling this way and they <card-link card=\"c-661-ddb399\">don't know they need help</card-link> then step back and let them fail and then help them when they're lying broken on the floor and are most open to learning and teaching.</p>\n",
	  "title": "Spectacular failures open people's minds to growth"
	},
	"c-033-edd465": {
	  "title": "How 3P platforms differ from 1P platforms",
	  "body": "<p>Many problems can be <card-link card=\"c-019-dbf233\">framed as platform problems</card-link>.</p>\n<p>Platforms that offer functionality to both 3P developers as well as 1P developers share many commonalities. The biggest difference--and it's a big one--is how much leverage you have over the developers to compel them to take actions that are good for the long-term health of the platform. This can in practice make the<card-link card=\"c-010-abc723\"> coordination headwind</card-link> orders of magnitude higher.</p>\n<p>In 1P contexts, you often have at least the backstop of escalating to the CEO (even if that isn't likely in practice). But in 3P contexts you often don't have any formal leverage and must use a series of carefully-calibrated carrots and sticks, <card-link card=\"g4a41d8c468_1_27\">providing guardrails</card-link> to <card-link card=\"g48845643ff_0_95\">align short-term individual and long-term aggregate incentives</card-link>.</p>\n<p>1P platforms can also be thought of, generally, as <card-link card=\"g48845643ff_0_539\">infrastructure</card-link>, although the platform framing also makes it harder to forget the importance of incentives.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">In a 3P platform, be careful on what </span><card-link style=\"background-color: transparent; font-size: 1em;\" card=\"c-272-bbd305\">expressible semantics </card-link><span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">you expose, </span><card-link style=\"background-color: transparent; font-size: 1em;\" card=\"c-301-ebd583\">since it's hard to change</card-link><span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">.</span></p>\n"
	},
	"c-062-ebc209": {
	  "title": "Platforms should provide high-level functionality",
	  "body": "<p>Developers will <card-link card=\"g4a41d8c468_1_17\">always prefer to have lower-level control than is globally optimal for the platform</card-link>.</p>\n<p>Using a higher-level API trades off convenience and succinctness for a real decline in control and power for developers. Ideally, in a rational, <card-link card=\"c-282-aed279\">well-layered platform</card-link>, when they run into something they can't do at a higher layer they can simply drop one layer down.</p>\n<p>But the answer is not to just provide a bedrock API that all developers use.&nbsp;</p>\n<p>To the extent that multiple developers are doing the same (or broadly similar) things in the layers above the current edge of the platform, that functionality should be factored down into the platform as an optional layer. This allows less code to be written, meaning bugs can be fixed once, performance optimizations can be done once, security bugs can be fixed once.</p>\n<p>This process is a complement to <card-link card=\"c-237-cad112\">experimentation happening on the frontier</card-link>. Good ideas, once found on the frontier (for multiple developers) can then be systematized.</p>\n"
	},
	"c-088-ddf726": {
	  "title": "Super-critical systems can have spectacular upheaval",
	  "body": "<p>A specific example is the emperor has no clothes. A specific type is <card-link card=\"c-202-daa014\">rotted foundations leading to spectacular failures</card-link>. Super-critical systems are primed for <card-link card=\"c-339-ecf497\">shattering</card-link>.</p>\n<p>A super-critical system is one that is primed for a massive. cascade. This is possible when everyone as a preference (even a weak one) away from the status quo, but everyone is held to the status quo because they believe that others support it.</p>\n<p>A single moment or observation can reveal the true state of the system, rapidly collapsing it to a new state. This is effectively a <card-link card=\"c-947-ebb297\">discontinuity, meaning the system goes through a temporary state of chaos</card-link>.</p>\n"
	},
	"c-092-ead076": {
	  "body": "<p><card-link card=\"c-144-fed076\">Rationalizing platforms</card-link> <card-link card=\"c-417-cef265\">improves their operating efficiency</card-link>, among other benefits. But <card-link card=\"c-950-dda594\">real world platforms are messy beasts</card-link> that are <card-link card=\"c-595-dfa132\">always changing</card-link>.</p>\n<p>They often have very large <card-link card=\"c-272-bbd305\">expressible semantics</card-link>, making it very hard to reason about how to properly factor them down to be more rational. It requires keeping thousands of real-world use cases in your head, as well as a deep understanding of the current architecture, what you expect future developers will want, etc. That means typically only a small number of people on the team are capable of doing it.</p>\n<p>These characteristics mean that often the right next step to rationalize a platform doesn't look like much, or is hard to explain to others outside of the team (for example leaders) about why <em>this </em>thing or <em>that </em>thing is better. That explaining is often pure overhead, as long as the platform is actually getting better over time. That's why the best way to approach it is to <strong>devote a fixed percentage of investment into rationalizing the platform, and give the team autonomy</strong>.</p>\n",
	  "title": "Invest continuous energy to rationalize platforms"
	},
	"c-105-edf300": {
	  "body": "<p>In a <card-link card=\"c-144-fed076\">rationalized platform</card-link> you want <card-link card=\"c-645-aee885\">proper layering of functionality</card-link> and also <card-link card=\"c-842-cbb989\">opinion</card-link>.</p>\n<p>What counts as opinion is always relative to other layers. Opinion can take many forms (opinion about way to structure your code, about lifecycles, about how pixels are drawn to screen, how your code should be distributed to end-users, etc). But when deciding if a platform is well-layered, look at two layers and decide if, for a given type of opinion, they layer on top is more opinionated than the layer on bottom.</p>\n",
	  "title": "Opinion is relative"
	},
	"c-113-cba734": {
	  "title": "Insights seem obvious in retrospect",
	  "body": "<p>Insights are statements that <card-link card=\"g487aed6370_0_50\">distill complexity down to mere complication</card-link>. One property of them is that they're <card-link card=\"c-738-afa781\">naturally viral</card-link>.</p>\n<p>Another is that <strong>they're obvious, but only in retrospect</strong>. Another way of putting this is that they can't be unheard. Once they're heard and understood, they change the way you look at the world, and some subset of things that used to feel unknowably complex now feel merely complicated.</p>\n<p>This obviousness can make them sound almost trite, and in fact the deepest insights are often considered the <em>most</em> trite, in the <card-link card=\"c-927-dab734\">hallmark card curse</card-link>. However, insights are by definition not obvious if you don't already know them, otherwise they would have been found and their worth would have been self-evident.</p>\n"
	},
	"c-133-dbf968": {
	  "title": "\"Bad\" challenge has more growth potential than \"good\"",
	  "body": "<p><card-link card=\"c-143-eeb845\">Challenge of all types is how you grow</card-link>.</p>\n<p>Good challenge is the fun kind, where <card-link card=\"c-812-ecf956\">you're in your flow state</card-link>. One of the reasons to follow your flow state is because it gives you free energy, which might allow you to go for an order of magnitude longer. But it's actually, unit for unit, less growth potential, because it only forces you to stretch in directions you can already stretch.</p>\n<p>Bad challenge is more of.a bummer, and it can be <card-link card=\"c-490-dbd062\">existentially terrifying</card-link>. <strong>Bad challenge forces you to grow in ways you didn't expect or even see value in before</strong>, which helps you become a more resilient and holistic human being.</p>\n"
	},
	"c-143-eeb845": {
	  "body": "<p>Challenge can be the \"good kind\" where you're in your <card-link card=\"c-812-ecf956\">flow state</card-link>, with the amount of challenge perfectly calibrated to be at the edge of your ability, and where the learning is highly motivating. Or it can be the \"bad kind\" where you are thrust into a situation where <card-link card=\"c-869-ebe777\">you're in over your head</card-link>, or a situation that is unexpectedly chaotic.</p>\n<p>But the truth is that <em>all </em>challenge, even the \"bad\" kind, is useful to grow, if you have a <card-link card=\"c-189-cec366\">growth mindset</card-link>. You're far less likely to be in a growth mindset for bad challenge, which means you'll find it <card-link card=\"c-490-dbd062\">existentially terrifying</card-link>, which means you'll <card-link card=\"c-700-cdd873\">crouch defensively</card-link>. Seeing even bad <card-link card=\"c-672-cce340\">challenge as fundamentally an opportunity for growth</card-link> is one of those <card-link card=\"c-927-dab734\">deep insights that sounds trite</card-link>.</p>\n<p>Challenge gives you <card-link card=\"c-243-acb142\">variance</card-link>, a thing to learn from to become more <card-link card=\"c-915-dbd615\">resilient</card-link>. Challenge is a <card-link card=\"c-455-bea351\">way of doing and growing</card-link>, thus a way to gain <card-link card=\"c-016-bfd943\">knowhow</card-link>.</p>\n",
	  "title": "Challenge is the only way to grow"
	},
	"c-144-fed076": {
	  "title": "The ideal goals of rational platforms",
	  "body": "<p>Many problems can be approached as platforms, and in any problem spaces, there are many ways to <card-link card=\"c-019-dbf233\">frame where a given platform begins and ends</card-link>.</p>\n<p>No platform is ever <em>perfectly&nbsp;</em>&nbsp;rational--it's an ideal that can be only asymptotically approached--but individual changes can generally be said to make a platform more or less rational. More rational platforms:</p>\n<ul>\n\t<li>Are constructed of <card-link card=\"c-282-aed279\">bricks held together loosely</card-link>&nbsp;where&nbsp;<card-link style=\"background-color: transparent; font-size: 1em;\" card=\"c-892-eeb744\">each layer is relatively thin</card-link></li>\n\t<li>Provide the <card-link card=\"c-062-ebc209\">proper level of high-level surfaces</card-link>, and <card-link card=\"c-457-aaa181\">provide a relatively even surface</card-link></li>\n\t<li>At each layer <card-link card=\"c-645-aee885\">build on&nbsp; top of concepts expressed only in layers below</card-link></li>\n\t<li>At every point have more <card-link card=\"c-842-cbb989\">opinionated layers above less opinionated layer</card-link>s</li>\n\t<li><card-link card=\"c-430-cbf039\">Don't mix opinion and lack of opinion</card-link> (of a given type) in a single layer</li>\n\t<li><card-link card=\"c-335-ebe825\">Minimize the length of normative spec text required to describe the system</card-link> over time</li>\n\t<li>Allow <card-link card=\"c-237-cad112\">experimentation at the frontier</card-link>&nbsp;and provide <card-link card=\"c_677_afa742\">foundations, not ceilings</card-link>.</li>\n</ul>\n"
	},
	"c-152-eea567": {
	  "body": "<p><card-link card=\"c-788-fbf753\">Stop energy</card-link> is any energy applied by an agent that opposes the forward momentum of something.Stop energy is easier to apply than forward energy for a number of reasons.</p>\n<p>The most fundamental is that there are <strong>simply more actions in the <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> to slow down an idea than to give it momentum</strong>. Another is that to propose a forward action is to stick your neck out and take on some risk, whereas \"I'm just not sure yet\" is safe.</p>\n<p>Another reason is that there are a number of questions that sound reasonable individually but where the effort to answer them all adds up to non-trivial amount of work:</p>\n<ul>\n\t<li>\"<card-link card=\"c-515-aba161\">Just asking questions</card-link>\"</li>\n\t<li>\"This sounds good, but <card-link card=\"c-382-bbe177\">as a follow-up, do an analysis of X</card-link>\"</li>\n\t<li>\"Here's a <card-link card=\"c-624-fee311\">concern I have about this one detail</card-link>\"</li>\n\t<li>\"Have you <card-link card=\"c-099-dac651\">considered this other option?</card-link>\"</li>\n</ul>\n",
	  "title": "Stop energy is easier than forward energy"
	},
	"c-166-adf525": {
	  "body": "<p>Ideas are not platonically \"good\" or \"bad\" in some vacuum. They are good or bad judged relative to the <card-link card=\"c-898-aca558\">current fitness landscape, or context</card-link>, being considered.</p>\n<p>An idea that is great--but only if we had significantly more resources at our disposal than we do at the moment, or are likely to at any time in the near future--is not good in this context. An idea that is otherwise great, but is extremely challenging to get buy-in on (because it is controversial, or requires a long-winded argument that is challenging to follow, or because the knee-jerk reaction to it will be strongly negative) is also not a good idea.</p>\n<p>The upshot of this is that often the context changes automatically over time. The core project does better and better, attracting additional resources. Key members of the team who might have opposed the idea move on. An idea that is not good right now, but is potentially good in the conceivable, not-too-distant future, is one that it's a good idea to leave <card-link card=\"c-944-aba951\">planted as a seed</card-link>.</p>\n",
	  "title": "The goodness of an idea is entirely contextual"
	},
	"c-202-daa014": {
	  "title": "Rotted foundations lead to spectacular failure",
	  "body": "<p>You won't notice, but you'll be setting yourself up for spectacular failure, <card-link card=\"c-020-abe755\">but at least you'll learn from it</card-link>.</p>\n<p>This can happen when you have your fingers in your ears, and you're powerful enough that no one else will help you understand, or maybe everything is on fire so no one notices.</p>\n<p>Things like <card-link card=\"c-812-acb509\">powerful people aren't as smart as they think they are</card-link>.</p>\n<p>A specific example of a <card-link card=\"c-088-ddf726\">super-critical states in systems</card-link>.</p>\n"
	},
	"c-214-bda400": {
	  "body": "<p><card-link card=\"c-788-fbf753\">Stop energy</card-link> is any energy that opposes the forward momentum of an idea.</p>\n<p>Stop energy is not intrinsically good or bad, because it is dependent on the goodness of the thing that it opposes. If it opposes an idea that is <card-link card=\"c-270-aeb148\">good from the broadest possible perspective</card-link>, then excess stop energy is bad. But if it opposes an actively bad idea then stop energy can be morally good.</p>\n<p>Of course, \"<strong>excess</strong>\" is the key word; in any given situation there's a \"proper\" amount of stop energy, in proportion to the downside risk and upside potential of the idea and the number of unknowns. And in normal practice this moral goodness or badness might be quite small. But in some cases that can be imagined, for example deciding whether to send life-saving aid to a devastated community, the moral weight can be quite large.</p>\n",
	  "title": "Excess stop energy can be morally bad to some extent"
	},
	"c-237-cad112": {
	  "title": "Experimentation should happen at the frontier",
	  "body": "<p>Platforms are layered systems. The <card-link card=\"c-842-cbb989\">lower the layer, the less opinionated it is</card-link>--but also the more <card-link card=\"c-301-ebd583\">constrained it is</card-link>. That's because it has a large number of users immediately above it who must potentially be changed when its API changes. (And even if most developers actually use the API via higher layers, those higher layers themselves must be changed.)</p>\n<p>This means that experimentation and prototyping of new ideas in the middle layers is extremely costly to do. <strong>Experimentation in a platform should take case at the frontier on the top</strong>.&nbsp;</p>\n<p>That's where new ideas should be explored in userland, with many of them being discarded, but when a good idea is found that multiple developers implement, <card-link card=\"c-062-ebc209\">it should be factored down into the platform so it can add values for others</card-link>.</p>\n<p>Be careful though, <card-link card=\"c-646-bbe593\">because developers will find a way</card-link>--even to ends that you find surprising and unhealthy for an ecosystem.</p>\n"
	},
	"c-237-fde112": {
	  "body": "<p>The more words or concepts in your argument, the more likely that a given reader takes issue with something in it, which could lead to <card-link card=\"c-805-ccf004\">snowballing disagreement</card-link>. The answer is to <card-link card=\"c-691-dcd196\">minimize surface area in your argument</card-link>.&nbsp;But how do you do that?</p>\n<p>The answer is to approach it like building a <card-link href=\"https://en.wikipedia.org/wiki/Minimum_spanning_tree\">minimum-spanning-tree</card-link>. First,&nbsp;<card-link card=\"c-347-ffb688\">write a scratch document</card-link>&nbsp;to understand the argument you want to make fully.</p>\n<p>You want the smallest convincing argument, and the trick is, conceptually, to not write full sentences but rather grow them word by word, out of order, based on the <strong>marginal impact of each additional word</strong>. That is, for each word, consider which one word would give the maximal additional clarity. You start with a handful of words and then crystallize ideas around it. With this technique, you'll leave out unnecessary adjectives and have punchier non-sentences.</p>\n<p>When combined with the <card-link card=\"c-367-dea711\">power of formatting</card-link>, you can create punchy, effective artifacts.</p>\n",
	  "title": "Building a minimal-spanning argument"
	},
	"c-270-aeb148": {
	  "title": "The morality of helping good things happen",
	  "body": "<p>Related to <card-link card=\"g487aed6370_0_91\">having a moral compass in complex problem space</card-link>s.</p>\n<p>Things that are good from the broadest possible perspective are morally good, and actions that cause them to happen are morally good, and actions that prevent them from happening (including adding <card-link card=\"c-788-fbf753\">stop energy</card-link>) are morally bad.</p>\n<p>Importantly, you must always be willing to consider the goodness of things from the <card-link card=\"c-114-cab409\">broadest possible perspective</card-link>, including investigating when you find unexpected stop energy to see if you might be missing something that makes the idea actually a bad one.</p>\n<p>Of course, the size of the moral good or bad is not fixed, but is a spectrum that is tied to the potential downside risk, the potential upside value, and the uncertainty.</p>\n<p>Note that all of this is distinct from whether an idea is <card-link card=\"c-166-adf525\">good for the current context</card-link>, because some good ideas are bad only because they are hard to convince people of currently.</p>\n"
	},
	"c-272-bbd305": {
	  "title": "Expressible semantics are the surface area of a platform",
	  "body": "<p>The goal of a platform is to allow developers (either <card-link card=\"c-033-edd465\">1P or 3P</card-link>) to build things on top of the APIs you expose.</p>\n<p>The set of things that are possible (the <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> of your platform, in a way) is the <strong>set of expressible semantics</strong>. It's the set of things that developers can <em>do </em>with your platform. The larger that set, the more \"powerful\" your platform--but also the more unwieldy and harder to reason about. A more <card-link card=\"c-144-fed076\">rational platform</card-link> <card-link card=\"c-417-cef265\">minimizes maintence burdern per unit expressible semantics</card-link>.</p>\n<p>As you rationalize your platform, you want to ensure that you keep the expressible semantics, as much as possible, constant or growing, or it will be very hard to compel developers to come along (especially if they are 3P) if you break some of their use cases without providing a viable alternative. As you do <card-link card=\"c-647-cea578\">primitive archeology</card-link> to approach a <card-link card=\"c-282-aed279\">well-layered, well-componentized platform</card-link>, you expand the expressible semantics by expanding the adjacent possible.</p>\n"
	},
	"c-282-aed279": {
	  "body": "<p>One of the <card-link card=\"c-144-fed076\">properties of a rational platform</card-link> is that the <strong>system should be broken into a series of bricks that are held together loosely</strong>.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">If the platform is all one large brick, then developers cannot use it if the brick does anything that they don't want. If the bricks are glued together with mortar, they're hard to separate. The ideal is bricks held together by gravity--they fit nicely in their default configuration but are easy to separate.</span></p>\n<p>This is one of the reasons that infrastructure (which any platform can be thought of) <card-link card=\"g487aed6370_0_20\">have compounding effects</card-link>. The adjacent possible is the set of possibilities not surrounding the <em>whole </em>platform, but instead the union of the set of space around each of the bricks, since they can all be used separately. This is the set of <card-link card=\"c-272-bbd305\">expressible semantics</card-link>.</p>\n<p>Of course, it's possible to take this too far. Every bit of semantics you expose <card-link card=\"g4a41d8c468_1_37\">constrains your future actions</card-link> by leading to more combinatorial actions developers could use.&nbsp; Build only API boundaries <card-link card=\"g48845643ff_0_453\">where you know of multiple instances of concrete demand</card-link>.</p>\n",
	  "title": "Bricks held together loosely"
	},
	"c-287-bae139": {
	  "title": "Write yourself fortune cookies from the future",
	  "body": "<p>As you're exploring a problem space, you're <card-link card=\"c-236-aac175\">feeding more and more information</card-link> <card-link card=\"g48845643ff_0_403\">into your pattern-matching intuition</card-link>. Insights that have been distilled out of intuition form building blocks that make it <card-link card=\"c-349-acc002\">easier for you--but especially others--to build on them</card-link>. But <card-link card=\"c-064-eda358\">distilling insights takes work</card-link>.</p>\n<p>One exercise you can do, after you've overcome a challenge or otherwise feel like you've learned something, is to attempt to distill an insight, by asking yourself: <strong>If I were able to send a fortune cookie worth of message to my past self, and have my past self know it was an important message from the future, what message would I write to most help my past self?</strong></p>\n<p>That message is your insight. By asking yourself the fortune cookie question often, you can accumulate a collection of insights to build on, <card-link card=\"c-222-bdd877\">growing your ability to make sense of new patterns at an exponential rate.</card-link></p>\n"
	},
	"c-301-ebd583": {
	  "body": "<p><strong>The more a platform's API is used, the more constrained it is and the harder it is to change.</strong></p>\n<p>The reason is that the API provider and the API user are coupled relatively tightly by the API contract. If the only user of the API is in the exact same code-base, then changing the API is relatively straightforward (and it's debatably not an API at all).</p>\n<p>But the farther away the uses of the API are, the more of them they are (in number of developers using), and the less leverage the platform has to induce developers to change, the harder it can be to change the API--sometimes to an overwhelming degree.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">The web platform is an example of one of the worst cases because of how evenly power is spread through the system. This is one of the key ways <card-link card=\"c-033-edd465\">1P and 3P platforms differ</card-link>.</span></p>\n<p>This is one of the benefits of a well-layered platform. If most developers are using the proper, <card-link card=\"c-062-ebc209\">higher-level abstraction</card-link>, then the number of API users is smaller (and, in the case of the platform layers above, also closer), making them easier to change.</p>\n",
	  "title": "Platforms are constrained by developers' usage"
	},
	"c-335-ebe825": {
	  "body": "<p>The <card-link card=\"c-272-bbd305\">expressible set of semantics</card-link> of a platform describes what developers can do with a platform. <card-link card=\"c-144-fed076\">Rationalized platforms</card-link> <card-link card=\"c-417-cef265\">minimize the maintenance</card-link> and conceptual burden for a given set of expressible semantics.</p>\n<p>One way to think about the conceptual burden is <strong>the number of characters of normative spec text required to describe a platform in sufficient detail that an interoperable alternative <em>could</em> be built</strong>. This is not to say you actually need to <em>write </em>that specification, or even have an interoperable implementation as a goal. It's rather a notion of <em>if you were to write the spec</em>&nbsp;how long would it be. This is related to the formal notion of <card-link href=\"https://en.wikipedia.org/wiki/Minimum_description_length\">Minimum Description Length</card-link>.</p>\n<p>Instead, this framing is .a way to notionally capture the conceptual complexity of your system. Well-layered platforms will tend to decrease this over time (higher-level layers <card-link card=\"c-645-aee885\">can be explained as straightforward behavior on top of lower layers</card-link>). When considering whether a proposed refactoring of the platform will be better over time, this conceptual metric provides a useful north star.</p>\n",
	  "title": "Minimize normative spec text required to describe platforms"
	},
	"c-347-eae336": {
	  "body": "<p>One of the properties of a <card-link card=\"c-144-fed076\">rational platform</card-link> is the proper layering. You want <card-link card=\"c-237-cad112\">experimentation and prototyping to happen on the frontier</card-link>. But once the system finds good functionality that others could use, you want to pave that cowpath to create a <card-link card=\"c-062-ebc209\">rational layer on top that others can also use, allowing code-reuse</card-link>.</p>\n<p>Now that you have a rational layering, you ideally want new developers and existing ones to use the proper layer, which might imply applying pressure to get them to use the new, more appropriate layer.</p>\n<p>This is a subclass of the more general observation to <card-link card=\"g4871092f30_0_1531\">only pave cowpaths retroactively when structuring a problemspace</card-link>.</p>\n<p>This is a way of continuously accreting more useful functionality in a properly-layered way, which allows you to <card-link card=\"g487aed6370_0_20\">capture compounding value</card-link>.</p>\n",
	  "title": "Growing platforms by paving cowpaths"
	},
	"c-366-acc719": {
	  "title": "Guardrails to divert developer energy",
	  "body": "<p><card-link card=\"c-646-bbe593\">Developers will often find a way</card-link> to do things they want to do--even if you think the approach is actively harmful to users or your ecosystem. Often it's tempting to try to throw up a wall to stop that behavior from happening. But in practice there's almost always some way for them to route around it in ways that create even worse outcomes than before--worse performance, even less control, or even messier experience (as often happens if you <card-link card=\"g48845643ff_0_244\">try to thwart a motivated agent</card-link>). The problem with that is over-estimating how much leverage you have.</p>\n<p>The correct approach is to <strong>build guardrails that better align developers' <card-link card=\"g48845643ff_0_95\">short-term individual&nbsp; incentives with their aggregate long-term incentives</card-link></strong>. Instead of trying to stop the behavior outright, make sure you have viable alternatives and then lightly divert some energy by changing defaults. As more developers do it, the trickle of diverted flow will create a deeper culvert that will divert more and more flow until you diverted a whole river of flow.</p>\n<p>This is a form of <card-link card=\"g487aed6370_0_236\">nudging</card-link> that, when done correctly, will divert more and more flow, as it <card-link card=\"g48845643ff_0_204\">changes the incentives of the agents around it</card-link>.</p>\n"
	},
	"c-380-ccf633": {
	  "body": "<p>It may be very small. Inside of certain contexts it's more likely to be straightforwardly true (e.g. coworkers in a high-selectivity environment).</p>\n<p>But the mindset is important everywhere with every person you meet. The learning will likely be of things you didn't anticipate, or even think was a thing worth learning. For example, you might learn from someone else's experiences that you enjoy a benefit from your <card-link card=\"c-745-afc766\">privilege that was previously completely invisible to you</card-link>.</p>\n<p>If you aren't open to learning from everyone you meet you'll lead a much poorer life.</p>\n",
	  "title": "There's always something to learn from everyone"
	},
	"c-387-ada024": {
	  "title": "You will miss insights from people you outrank",
	  "body": "<p>If you believe (implicitly or explicitly) that you outrank a person (in terms of level within your organization, seniority, intelligence, etc) then you will be <strong>less likely to being open to learning from them, in proportion to how much you outrank them. </strong>This is bad because <card-link card=\"c-380-ccf633\">there is always <em>something</em>  (albeit perhaps small in some cases) to learn from absolutely everyone</card-link>.</p>\n<p><card-link card=\"c-755-cec952\">Learning is in large part the process of pulling on threads with ontological humility when you are surprised by new information</card-link>, because there's a hint that there's something you don't understand yet. But for that to work you both have to notice when you <em>should </em>be suprised, as well as have the <card-link card=\"c-602-aea694\">ontological humility </card-link>to dig in. With people you outrank, most of the time you will have a better handle on the situation than them--but not always. Because you will assume a baseline probability that if you disagree you are right (which tilts in your favor), you'll be quicker to dismiss or not even notice things that you actually should learn from.</p>\n<p>Because this is a <card-link card=\"c-745-afc766\">power differential you will always be susceptible to it</card-link> and it will compound strongly if you don't keep it in check, as your <card-link card=\"c-812-acb509\">lack of openness creates a chilling effect</card-link>.</p>\n"
	},
	"c-417-cef265": {
	  "body": "<p>One of the goals of <card-link card=\"c-144-fed076\">rationalizing a platform</card-link> is to make it more efficient.</p>\n<p>Rational platforms <strong>minimize maintenance&nbsp;costs per unit of <card-link card=\"c-272-bbd305\">expressible semantics</card-link>.</strong></p>\n<p>Expressible semantics are the surface area of a platform. A rationalized platform will reduce the amount of code necessary to support a given amount of expressible semantics, by refactoring things to be layered appropriately and explainable in terms of lower layers in the platform, making them easier to reason about.&nbsp;</p>\n<p>Rational platforms are also easier to add functionality to; because they <card-link card=\"c-282-aed279\">have more surface area at the right level</card-link>, they allow developers to do more things without blocking on the platform owner. They also <card-link card=\"c-062-ebc209\">allow code reuse</card-link>.</p>\n",
	  "title": "Rational platforms are more efficient"
	},
	"c-430-cbf039": {
	  "title": "Don't mix opinion and lack of opinion in one layer",
	  "body": "<p>In <card-link card=\"c-144-fed076\">rational platforms</card-link>, <card-link card=\"c-475-acd055\">opinion is often necessary</card-link>. But <card-link card=\"c-561-dab051\">expressing an opinion fundamentally takes away some control from developers</card-link>. Rational platforms have <card-link card=\"c-842-cbb989\">opinionated layers on top of unopinionated layers</card-link>.</p>\n<p>If you mix opinion and lack of opinion in the same layer, you will often get stuck between conflicting pulls, between enabling developers to express whatever they want, and also constraining what they can express. This often manifests as oscillating back and forth between a <card-link card=\"g48845643ff_1_40\">polarity</card-link> of flexibility and control within the team, which can be exhausting and confusing.</p>\n<p>This tension is difficult to resolve within a single layer, and the best answer is to split the layer into two, with the more opinionated layer on top. Even if the same people are working on both layers, seeing clearly that there are two distinct conceptual layers helps resolve the tension and makes solutions more clear.</p>\n"
	},
	"c-456-fab144": {
	  "body": "<p>In platforms, <card-link card=\"c-842-cbb989\">higher layers often have more opinion</card-link>, and also typically <card-link card=\"c-736-dcc325\">have more power</card-link>, because they have more control over the final output the user sees.</p>\n<p>This means that the <strong>layer that legitimately decides the final pixels the user sees has the most power in the system</strong>. Different parts of the screen will have different owners. Typically the largest amount of screen real estate is devoted to the content of individual apps, who have near total (but not complete) sovereignty over the content of the rectangle they control.</p>\n<p>This layer is where the <card-link card=\"c-626-ebe599\">aggregation effect</card-link> applies most strongly, because it's  the layer that has the most direct and legitimate relationship with the end user.</p>\n<p><card-link card=\"c-479-bcd400\">The more opinion that the layer may legitimately apply, the more potential power</card-link> it has to exercise over those final pixels.</p>\n",
	  "title": "The layer that decides the final pixels has the most power"
	},
	"c-457-aaa181": {
	  "body": "<p>A <card-link card=\"c-144-fed076\">fully rational platform</card-link> isn't just well layered, it's also provides a smooth, continuous surface area--it isn't \"lumpy\".</p>\n<p>What this means more concretely is that if the platform provides reasonably high-level APIs for one subset of functionality, then it shouldn't offer only bedrock-level APIs in another subset.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">If it does, this is a smell that the platform is not fully rationalized.</span></p>\n<p>As a developer, jumping from high level abstractions to lower level abstractions is disorienting and requires much more conceptual burden. It also makes it more likely that the platform doesn't have enough <card-link card=\"c-062-ebc209\">high-level functionality,</card-link> or is not broken up into <card-link card=\"c-892-eeb744\">the proper layering</card-link>.</p>\n",
	  "title": "Platforms should provide an even surface"
	},
	"c-470-faf007": {
	  "body": "<p>Many problems can be considered platforms, and <card-link card=\"c-019-dbf233\">almost all platforms are layered on top of <em>other </em>platforms</card-link>. If a platform is successful--if it finds enough users to justify its continued existence--then it never tends to go away, it just gets more and more boring as more interesting things are layered on top.</p>\n<p>At the very top of a platform is the area of the wildest experimentation and prototyping. As new good ideas are found, they are subsumed into the platform, adding new layers over time. The layers beneath might have a period of competition where multiple implementations vie for supremacy, but after more layers are continually piled on top and they get farther and farther underground, even that often slows.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">As an example, x86 is still at the bottom of many computer platforms--but that isn't a particularly salient fact for the vast, vast majority of experiences built for computers today.</span></p>\n<p><span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">Sometimes if there is protected IP or other lack of competition at a lower level, it is still \"interesting,\" although then the incentive to route around it by other parts of the system is high.</span></p>\n",
	  "title": "Successful platforms never die they just tend to get boring"
	},
	"c-475-acd055": {
	  "title": "The necessity of opinion in platforms",
	  "body": "<p>Platforms, at some point, need to express an opinion (although <card-link card=\"c-105-edf300\">what looks like an opinion and what looks low level will vary depending on your vantage point</card-link>). This is true in general of platforms, but is doubly true <strong>if there is any layer in your platform that puts different developers in tension over a rivalrous, shared resource--</strong>someone must decide what wins!&nbsp;</p>\n<p>In this case, it's necessary for the platform to perform the role of steward and mediate shared access to that resource.</p>\n<p>Every platform, when considered from a large-enough vantage point, must have opinion at some point, because fundamentally there are only so many seconds in the day, and only so many photons that can beam into a user's eyes--implying that there must be some opinion exercised at some layer of the stack about <em>which </em>photons get beamed out.</p>\n"
	},
	"c-479-bcd400": {
	  "title": "Layers sought after for opinion have more power",
	  "body": "<p>Layers that are higher in the stack can <card-link card=\"c-842-cbb989\">can be more opinionated</card-link>, and <card-link card=\"c-736-dcc325\">higher layers in the stack have more power in general</card-link>, meaning that <card-link card=\"c-456-fab144\">the highest opinionated layer has the most power</card-link>. But layers with <strong>more legitimacy to apply opinion have the most power</strong>.</p>\n<p>Legitimacy of opinion means how much the user has specifically sought out the layer to apply its opinion. For example, an app that simply keeps track of notes the user has input doesn't apply much opinion--it simply keeps track of inputs the user put in. But an app that ranks results from a large corpus based on a user's query is specifically sought out for its judgement and opinion.</p>\n<p>Because there are many possible outputs that could be shown, the layer has many choices it gets to make, out of a large space of possibilities, which is the <card-link card=\"c-772-ebe854\">definition of power</card-link>. That leaves room to get better and better, and to provide lots of user value, and <card-link card=\"c-118-dce353\">things that provide user value are monetizable</card-link>.</p>\n"
	},
	"c-515-aba161": {
	  "title": "Stop energy of 'just asking questions'",
	  "body": "<p>This question can sound reasonable individually but <card-link card=\"c-152-eea567\">can add non-trivial stop energy</card-link>.</p>\n<p>Questions might sound morally neutral, but questions take time to answer, especially if the situation compels the question to be answered properly, and over time that can add up to non-trivial stop energy.</p>\n<p><card-link card=\"c-788-fbf753\">Excess stop energy on an actively good idea is a moral net negative</card-link>.</p>\n"
	},
	"c-561-dab051": {
	  "title": "In platforms, opinion means taking control from developers",
	  "body": "<p>In <card-link card=\"c-144-fed076\">rational platforms</card-link>, <card-link card=\"c-475-acd055\">opinion is often necessary</card-link>.</p>\n<p>What is opinion? Opinion means that, at that layer, some of the choices that would otherwise be available to the developer using the platform are constrained, so they now have fewer choices available to them.</p>\n<p>This is not a theoretical loss of control. It means that if, for example, their CEO were to come to them and demand certain functionality be implemented, they might be stuck in a corner. It is one of the reasons developers often (rationally) <card-link card=\"g4a41d8c468_1_17\">want to operate at a lower level than they should</card-link>.</p>\n<p>The benefit they get by giving up that control is that <card-link card=\"c-062-ebc209\">they get the benefits of code-reuse</card-link>.</p>\n<p>In a properly layered platform, the danger of not having control is mitigated by knowing that, worst case, they just need to <card-link card=\"c-892-eeb744\">pop down one (small) layer in the API</card-link>.</p>\n"
	},
	"c-595-dfa132": {
	  "body": "<p>If platforms never grew, you could just devote energy to <card-link card=\"c-417-cef265\">rationalizing them</card-link>, but in practice their <card-link card=\"c-272-bbd305\">expressible semantics</card-link> are almost always growing (and <card-link card=\"c-898-dbb965\">if they aren't growing, they're probably dying</card-link>).</p>\n<p>This means that in practice you can never devote all of your energy to rationalizing your platform to make it more maintainable. You must take into account what the platform can do today, as well as requirements you can see on your immediate horizon, and the types of requirements you expect in the medium- to long-term.&nbsp;</p>\n<p>This makes the<card-link card=\"c-950-dda594\"> real world quite messy</card-link>. There's never a good time to rationalize your platform. Instead you should<card-link card=\"c-092-ead076\"> invest a continuous percentage of your time and headcount to rationalizing your platform</card-link>.</p>\n",
	  "title": "Platforms are never static"
	},
	"c-597-daf136": {
	  "title": "Use principles when deciding to zig or zag",
	  "body": "<p>One of the reasons even&nbsp;<card-link card=\"g487aed6370_0_231\">small decisions can add up to a lot</card-link>. There are often tons of micro-decisions in front of you that seem equivalent, where either option is equally good or bad.&nbsp;</p>\n<p>If you were to flip a coin, then you'd just random-walk through the solution space. But the various options are almost never actually equivalent. If you have a principle to follow--a northstar, or a rule of thumb--that gives you <em>any </em>kind of edge, then you should use it.</p>\n<p>Over time these small edges can add up to a lot.</p>\n"
	},
	"c-645-aee885": {
	  "body": "<p>One of the important goals of a <card-link card=\"c-144-fed076\">rationalized platform</card-link> is that it is well-layered, in multiple senses. One type of layering is ensuring that <card-link card=\"c-842-cbb989\">higher layers are more opinionated than lower layers</card-link>.</p>\n<p>Another important layering property is that, as much as possible, <strong>higher layers should be explainable in terms of lower layers</strong>. That is, the higher-level API of a layer should express semantics that are a reasonably thin or opinionated combining of semantics exposed by layers that are strictly lower in the stack.</p>\n<p>Layers that do not follow this property are likely either <card-link card=\"c-892-eeb744\">too thick</card-link> or rely on <strong>too much magic</strong>. That's a layering smell that implies there are things that developers might want to do that they won't be able to break apart and use separately (the platform is not composed of <card-link card=\"c-282-aed279\">bricks held together loosely</card-link>). It also makes the layer harder to reason about.</p>\n",
	  "title": "Layering platforms properly"
	},
	"c-646-bbe593": {
	  "body": "<p><card-link card=\"c_124_bec870\">Developers are extremely motivated users</card-link>, which means that you can <card-link card=\"g48845643ff_0_443\">harness their energy to search the adjacent possible for you</card-link>.</p>\n<p>One downside of this, though, is that they can be hard to control. If they are motivated enough, they <strong>will find a way</strong>&nbsp;to do even things that you don't like or think are unhealthy for the platform or ecosystem. They will <card-link card=\"c-237-cad112\">do things at the frontier</card-link>, writing gobs of hacky code in userland to do things <card-link card=\"g4a3ed6c576_0_44\">you hadn't even realized were technically possible</card-link> or feasible.</p>\n<p>This is especially true in ecosystems with <card-link card=\"g4a41d8c468_1_12\">highly motivated developers</card-link> and that are <card-link card=\"g48845643ff_0_2\">more open</card-link>--that is, where there are fewer constriction points in the system where gatekeepers can exert editorial control. More systems have this property than you might think; for example even in 1P internal contexts there are often ways to route around decision-making structures. If you try to stop them you'll probably end up making the problem worse.</p>\n<p>The best approach is to <card-link card=\"c-366-acc719\">set up well-calibrated guardrails to divert developer energy over time</card-link>.</p>\n",
	  "title": "Developers will find a way"
	},
	"c-647-cea578": {
	  "title": "Using primitive archeology to clean up platforms",
	  "body": "<p>One of the properties of <card-link card=\"c-144-fed076\">rational platforms</card-link> is a clean layering. But <card-link card=\"c-950-dda594\">real world platforms are messy</card-link>&nbsp;and <card-link card=\"c-595-dfa132\">always moving</card-link>. Often you inherit an improperly layered platform (for example, functionality in a layer that is <card-link card=\"c-892-eeb744\">too thick and monolithic</card-link>) and need to rationalize it after the fact.</p>\n<p>One of the tools to do so is called <strong>primitive archeology</strong>. You look at a layer that is too thick (and possibly monolithic) and you try to imagine what primitive layers are implied within that, if excavated, would lead to a rational platform. For example, Service Workers looked at App Cache, and imagined \"what if that were implemented on top of a networking API written in Javascript?\"</p>\n<p>Often after you unearth a new primitive, you have to get old developers to use it, and then deprecate the bespoke/ad-hoc functionality they were relying on.</p>\n<p>Primitive archeology is post-hoc rationalization of a platform. It and&nbsp;<card-link style=\"background-color: transparent; font-size: 1em;\" card=\"c-347-eae336\">paving cowpaths</card-link>&nbsp;are some of the most common behaviors to rationalize platforms.</p>\n"
	},
	"c-661-ddb399": {
	  "body": "<p><card-link card=\"c-571-aeb885\">No one is ever done learning</card-link>. But if <card-link card=\"c-794-cbb266\">everyone tells you that you walk on water</card-link>, or if you feel complete mastery, or<card-link card=\"c-812-acb509\"> your power makes people less likely to share feedback</card-link>, or if the i<card-link card=\"c-869-ebe777\">dea that you might be in a situation beyond your ability is too existentially terrifying to even contemplate</card-link>, you likely won't be in a <card-link card=\"c-189-cec366\">growth mindset</card-link>.</p>\n<p>That means that you will miss hints around you that you should be growing or changing. You'll miss the <card-link card=\"c-602-aea694\">ontological humility</card-link> to be open to how you might change. Especially if <card-link card=\"c-387-ada024\">you're more powerful than the people around you</card-link>, others will <em>notice </em>that you seem impervious to feedback and will stop even bothering to try to help you, compounding the problem and <card-link card=\"c-202-daa014\">rotting the foundations</card-link> even further.</p>\n<p>They need an open door of curiosity to start from. if you're a subordinate in this situation, <card-link card=\"c-383-efb445\">ask them questions to get them to introspect</card-link>, and pull on any threads of self-discovery that appear to help them grow. But if that fails, the only option might be to let them <card-link style=\"background-color: transparent; font-size: 1em;\" card=\"c-020-abe755\">fail spectacularly</card-link> so they can finally be ready to learn.</p>\n",
	  "title": "People who don't know they need help can't be helped"
	},
	"c-663-faa399": {
	  "title": "The importance of the length of your existential runway",
	  "body": "<p>The primary constant of how much energy to devote to hill climbing (no brainers) vs hill-finding.</p>\n<p><card-link card=\"g48845643ff_0_239\">Runway</card-link> is not just \"burn rate of money\". It's also political capital per headcount in an organization Or burn-rate of personal resources. Or how quickly other players in the market might get so much headway as to box you out.</p>\n<p>If your existential runway is short then you shouldn't be doing far-flung innovation or <card-link card=\"c-944-aba951\">planting seeds</card-link>.</p>\n"
	},
	"c-672-cdd497": {
	  "title": "Changed rules of the game just change optimal strategies",
	  "body": "<p>If you have <card-link card=\"g48a31f22cb_0_45\">motivated agents</card-link> in a <card-link card=\"c_579_abc424\">complex adaptive system</card-link> that are doing some exploitative strategy that leads to globally sub-optimal solutions, then it's tempting to change the rules of the game to try to preclude those strategies.</p>\n<p>But motivated agents will find a way, because their motivation won't change. They'll find loopholes, or change their behaviors, in <card-link card=\"c-589-bbc501\">ways you didn't anticipate</card-link>. The optimal strategies for those motivated agents will co-evolve with their context, which includes the rules of the game.</p>\n<p>This leads to a never-ending arms race, with the only hope that increasingly more expensive to exploit so that only the very top-motivated agents bother. <card-link card=\"c-969-fce754\">Even small changes in rules can lead to wildly changed optimal strategies</card-link> due to the non-linear, <card-link card=\"g4a3ed6c576_0_14\">game-theoretical</card-link> dynamics</p>\n<p>This is a more general example of <card-link card=\"c-646-bbe593\">developers will find a way.</card-link></p>\n"
	},
	"c-691-dcd196": {
	  "body": "<p>The more surface area in your argument, the more likely that someone will come across a thing that concerns them enough to cast doubt on the rest of the argument. That's partially because it's fundamentally easier to <card-link card=\"c-152-eea567\">add stop energy than forward energy</card-link>.</p>\n<p>Imagine that every word that you add t your argument has some static probability of triggering a concern for some reader. The higher the number of words, and the higher the number of people who read it, the higher the likelihood that that argument triggers, and at that point it might <card-link card=\"c-805-ccf004\">snowball</card-link>. Controlling the size of the audience sometimes isn't possible, but the number of words that readers must read is. Think of developing the <card-link card=\"c-237-fde112\">minimal-spanning argument</card-link>.</p>\n<p>You want to keep the main thrust of the argument as tight as possible to convince most readers, while having off-ramps for concerns as they crop up. One practical example of this approach is the <card-link card=\"c-716-fcd979\">interlinked-FAQ</card-link>. This is not about hiding relevant information; it's about not providing more loose, distracting threads than are necessary.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">Related to </span><card-link style=\"background-color: transparent; font-size: 1em;\" card=\"c-335-ebe825\">minimize number of concepts</card-link></p>\n",
	  "title": "Minimize surface area in your arguments"
	},
	"c-693-bfb516": {
	  "title": "Don't bother trying to find the best idea",
	  "body": "<p>It can be tempting to try to find the best idea at any given time step. But the reality is that there are often many good ideas in your adjacent possible, and many of them are not in tension but actually are <card-link card=\"c-764-abf612\">possible to do in any order to get cumulative value out of all of them</card-link>.</p>\n<p>Remember: <strong>the thing you have to prove is not that an idea is the best one, but that it's better than doing what you're currently doing</strong> (which is often nothing).</p>\n<p>Proving that a given idea is the best one is impossible, because <card-link card=\"c_040_eee844\">perfection is infinitely expensive</card-link>, and often <card-link card=\"c-682-bac995\">good enough is sufficient</card-link>.</p>\n<p>Asking<card-link card=\"c-099-dac651\"> if someone has considered all of the other options</card-link> is often a form of <card-link card=\"c-788-fbf753\">excess stop energy</card-link>.</p>\n"
	},
	"c-697-edd524": {
	  "title": "Failed ideas create craters around them",
	  "body": "<p>If an idea is attempted, and fails in an unambiguous or well-known fashion, it will create a \"crater\" around it. That is, ideas that seem similar (either that <em>are </em>similar, or that merely <em>look </em>similar) will now have an additional headwind to overcome in order to be considered good enough to attempt.</p>\n<p>This effect will be a gradient, and will be at its strongest for ideas that look almost exactly the same as the failed idea, and be somewhat weaker for ideas that less-obviously have some parallels.</p>\n<p>This is a problem because the <card-link card=\"c-166-adf525\">goodness of an idea is entirely contextual</card-link>, so even if the idea were almost precisely the same, it's entirely possible that the context has sufficiently changed that it is now a very good idea, but will be harder to convince others to attempt.</p>\n<p>This is one of the reasons that attempting an idea that has a good core but is unlikely to work in the current context is a bad idea, because it makes it less likely you'll be able to attempt it when it is a good idea.</p>\n"
	},
	"c-736-dcc325": {
	  "body": "<p>In platforms, <card-link card=\"c-842-cbb989\">higher layers have more opinion than lower layers</card-link>. But they also tend to <strong>have more power </strong>in the overall system. This is because higher layers typically have the ability to override the output of  lower layers, amending, overriding, or eliding the lower layer's output.</p>\n<p>As a more concrete example, imagine a library that spellchecks text. The developer's application code could choose to ignore various reported misspellings, not rendering them to the screen, if it knows of words in this context that shouldn't count as misspellings.</p>\n<p>Note <strong>that the <em>legitimate  </em>ability to override a lower's layer output is different than the <em>technical </em>ability</strong>, and that's related to <card-link card=\"c-479-bcd400\">how much opinion the layer may legitimately apply</card-link>, which is <em>correlated </em>with how high it is in the stack but distinct.  For example, a system compositor thread technically could override any pixels in the final output, but realistically is expected to composite precisely the pixels it was provided.</p>\n<p>This factor is why <card-link card=\"c-456-fab144\">the layer that decides the final pixels has the most power</card-link>.</p>\n",
	  "title": "Higher levels in platforms have more power"
	},
	"c-738-afa781": {
	  "body": "<p>Insights are statements that <card-link card=\"g487aed6370_0_50\">distill complexity down to mere complication</card-link>.</p>\n<p>The mark of a true insight is that it is naturally viral. People who hear it and agree it is insightful have an urge to write it down or share it.</p>\n<p>Another fundamental property of insights is that <card-link card=\"c-113-cba734\">they're obvious--but only in retrospect</card-link>.</p>\n",
	  "title": "Insights are naturally viral"
	},
	"c-764-abf612": {
	  "body": "<p>At any given time, there are often multiple good ideas in the <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link>.</p>\n<p>Often these ideas are not mutually exclusive; they can be done in multiple orders, with the value of each of them accumulating and accreeting as you do them. (Although often there are some orders that are better than others, for example if doing one will <card-link card=\"c-949-ebe931\">make the other cheaper to do in the future</card-link>.)</p>\n<p>This is another reason why it <card-link card=\"c-693-bfb516\">often doesn't make sense to look for the best idea,</card-link> but merely a <card-link card=\"c-682-bac995\">good enough one</card-link>.</p>\n<p>This is another reason why <card-link card=\"c-099-dac651\">asking if someone has considered other options</card-link> can lead to <card-link card=\"c-788-fbf753\">excess stop energy</card-link>.</p>\n",
	  "title": "Often good ideas can be done in any order"
	},
	"c-788-fbf753": {
	  "title": "Stop energy opposes forward momentum",
	  "body": "<p>Forward energy is effort invested by an agent to bring an idea forward towards completion. Stop energy is any energy that impedes that motion; it can be thought of as <card-link card=\"g4871092f30_0_1541\">friction</card-link>, although generally friction is a passive property of a problem space and here it's actively applied by other agents.</p>\n<p><card-link card=\"c-214-bda400\">Excess stop energy is morally bad</card-link>.</p>\n<p><card-link card=\"c-152-eea567\">Stop energy is easier to apply than forward energy</card-link>.</p>\n"
	},
	"c-812-acb509": {
	  "title": "Powerful people think they are smarter than they are",
	  "body": "<p>Because you likely <em>are</em> smart. That's likely part of how you got to where you are (although things like <card-link card=\"g487aed6370_0_186\">privilege</card-link> and <card-link card=\"g4a7499c914_0_15\">success begets success</card-link> almost certainly played a role, too).</p>\n<p>But that means you'll <card-link card=\"c-387-ada024\">miss insights from people you outrank</card-link>. And people will watch how you dismiss or ignore (or maybe even inadvertently punish) people who try to help you see them, and so it will create a chilling effect where people will raise dissenting or differing opinions less. That will lead to less disagreement, making you think that you're even smarter than you are, but in reality you're <card-link card=\"c-794-cbb266\">losing the ability to grow and learn</card-link>, and people are learning to route around you or fear you, which will cause your <card-link card=\"c-202-daa014\">foundation for leadership to rot</card-link>. This process compounds strongly and can lead to <card-link card=\"c-020-abe755\">spectacular failures</card-link>.</p>\n<p>This is inevitable when you enjoy power. You will never fix it and be done with it. You must be aware of it at all times and work to slow or counteract its spread, by giving people the space to disagree or provide feedback, to demonstrate <card-link card=\"c-602-aea694\">ontological humility,</card-link> etc.</p>\n"
	},
	"c-812-ecf956": {
	  "body": "<p>Flow state is <strong>fun and inspiring.</strong></p>\n<p>One of the reasons <card-link card=\"g48845643ff_0_138\">you should follow what gives you energy</card-link> as a way to grow maximally.</p>\n<p>Flow state gives you an <strong>order of magnitude more energy than norma</strong>l, which gives you more space to grow. However, unit for unit, <card-link card=\"c-133-dbf968\">bad challenge is actually higher growth potential</card-link>.</p>\n<p>But be careful because <card-link card=\"c-794-cbb266\">when you think you walk on water</card-link> you won't be open to growth from \"bad\" challenge.</p>\n<p>Also watch for the <card-link card=\"g4a85094c68_0_45\">flow state to be like a drug</card-link>, which contorts your life, possibly affecting those around you.</p>\n",
	  "title": "When you're in your flow state you have free energy"
	},
	"c-842-cbb989": {
	  "body": "<p>This is one of the <card-link card=\"c-144-fed076\">properties of rational platforms</card-link>. Platforms <card-link style=\"background-color: transparent; font-size: 1em;\" card=\"c-475-acd055\">must express an opinion in some cases</card-link>. What looks like an opinion will depend on the vantage point you take, and what you compare it to, because <card-link card=\"c-105-edf300\">opinion is relative</card-link>.</p>\n<p>When you compare two layers of a platform relative to one another, the layer that is more opinionated in the other (which will depend on your framing) should always be on top of the other layer. <card-link card=\"c-736-dcc325\">Higher layers often have more power than lower layers</card-link>.</p>\n<p>This is partly because opinions, by definition, are not shared by all--which means that it's plausible that a developer using your platform will legitimately want to peel back a layer of opinion. And when they do, they shouldn't have to also peel back an un-opinionated layer, too.</p>\n<p>The reason this is true is a generalization of <card-link card=\"c_677_afa742\">building foundations not ceilings</card-link>. See also the <card-link card=\"c-645-aee885\">proper layering of platforms</card-link>.</p>\n",
	  "title": "Opinion should always be on top of lack of opinion"
	},
	"c-858-dfd425": {
	  "body": "<p>You can star cards, and when you do they'll show up in the Starred list at the top nav.</p>\n",
	  "title": "About Stars"
	},
	"c-892-eeb744": {
	  "title": "Layers in platforms should be thin",
	  "body": "<p>One of the properties of rationalized platforms is that functionality should be broken up into layers. It is important that these <strong>layers be relatively thin</strong>.&nbsp;</p>\n<p>If a developer trying to use your platform, and they find that the piece they are using doesn't do what they want, they have a few options. One is to simply not use your platform at all--a likely outcome if your platform is a monolith. Another is to peel back the top layer and work at the layer below.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">If the layer below is very deep, they have to jump down to bedrock, recreating a lot of that functionality by hand. That's error prone, requires lots of code, and means they'll miss out on improvements to that layer over time.</span></p>\n<p>Ideally when they peel back each layer, they drop only a small amount to the layer below, allowing them to maintain as much value from the layers below.</p>\n<p>Of course, you can take this too far--exposing all of the guts of a platform leads to <card-link card=\"g4a41d8c468_1_37\">combinatorial overhead when changing anything</card-link>.</p>\n"
	},
	"c-927-dab734": {
	  "title": "The Hallmark card curse: deep insights sound trite",
	  "body": "<p>Often the deepest insights are ones that you've heard a million times before, and through repetition in superficial contexts they will have come to sound extremely trite. But often the <card-link card=\"c-981-dfb794\">deepest insights come not from new ideas, but from a change of perspective or mindset shift</card-link>.</p>\n<p>Before the mindset shift, the statement seems like a platitude; it's only after the right mindset shift that you can't unsee the depth of it--<card-link card=\"c-113-cba734\">the mark of a true insight</card-link>. Examples of cursed statements are <card-link card=\"c-672-cce340\">see challenges as opportunities for growth</card-link>, <card-link card=\"c-905-efa970\">no pain no gain</card-link>, and <card-link card=\"c-792-ffb794\">it's the journey that counts</card-link>.</p>\n<p>This is another example of a <card-link card=\"c-697-edd524\">crater around an idea</card-link>, making people even more resistant to accepting it than is warranted.</p>\n<p>Part of the curse is that even once you, through some effort, have come to understand the significance of their insight, it is still hard for you to convince <em>others</em> of their significance, because they have craters around the idea, too. In fact, they're often more likely to think something is wrong with you than to reexamine their position.</p>\n"
	},
	"c-950-dda594": {
	  "title": "Real-world platforms are messy",
	  "body": "<p>Ideally you want platforms to asymptotically <card-link card=\"c-144-fed076\">approach the ideal of being fully rational</card-link>. In a perfect world, you'd start from bedrock, <card-link card=\"g4a41d8c468_1_82\">respond to concrete demand</card-link>, and slowly accrete layers of useful functionality that adheres to the goals of a rational platform from the start.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">The real world almost never works that way. More often you either have inherited a platform that has at least one of these bad properties (and will need tools like <card-link card=\"c-647-cea578\">primitive&nbsp;</card-link></span><span style=\"background-color: transparent;\"><card-link card=\"c-647-cea578\">archeology</card-link> to help clean up):</span></p>\n<ol>\n\t<li><strong>Is <card-link card=\"c-457-aaa181\">uneven</card-link></strong> - Where there is some high-level functionality but a lot of bedrock functionality.</li>\n\t<li><strong>Is <card-link card=\"c-282-aed279\">monolithic</card-link></strong> - Functionality is provided only in too-large chunks</li>\n\t<li><strong>Is <card-link card=\"c-062-ebc209\">too low level</card-link></strong>&nbsp;- The functionality is so low level that developers have to do a lot themselves, meaning everyone does similar things differently</li>\n\t<li><strong>Is too <card-link card=\"c-475-acd055\">unopinionated</card-link></strong> - Meaning everyone uses it at different levels, in ways that are hard to rationalize</li>\n\t<li><strong><card-link card=\"c-595-dfa132\">Is growing too quickly</card-link></strong>&nbsp;- So new functionality has to be thrown together quickly without properly thinking about its long-term effects.</li>\n</ol>\n"
	},
	"c-981-dfb794": {
	  "body": "<p>The mark of a true insight is that it is <card-link card=\"c-738-afa781\">viral</card-link> and that it <card-link card=\"c-113-cba734\">seems obvious--but only in retrospect</card-link>. But insights are not just some context-free statements; like all things, their <card-link card=\"c-166-adf525\">goodness is contextual</card-link>, and part of the context is the mindset of the people judging the statement, including yourself.</p>\n<p>That implies that at least some insights come from mindset shifts. In practice, these are often the <em>deepest</em> insights, because the feeling of obviousness is, in retrospect, so overpowering because it had been staring you in the face for all of these years. This is part of the reason for the <card-link card=\"c-927-dab734\">hallmark card curse</card-link>, that the deepest insights often sound trite.</p>\n<p>This is the insight behind the famous Proust quote, \"The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.\"</p>\n",
	  "title": "The deepest insights come from mindset shifts"
	},
	"c-991-cba033": {
	  "title": "About Reading Lists",
	  "body": "<p>There are a lot of cards to read in the collection, and it can be hard to keep track.</p>\n<p>You can use a feature called <strong>reading list</strong>&nbsp;to keep track of cards you want to read next. Just hit the reading-list button below any card (it's the button that looks like an icon to add to a playlist) and they'll show up in the Reading List tab. Once you're done reading that card, you can simply tap the button again to remove it from your reading list.</p>\n<p>When you see a link on any card, you can also Ctrl/Cmd-Click it to automatically add it to your reading-list even without opening it. Links to cards that are already on your reading-list will show a double-underline.</p>\n"
	},
	"c_040_eee844": {
	  "body": "<p>In any given problem domain, there is a fundamental curve for how many units of effort create how many units of \"fidelity\" in terms of an idea being the best it can possibly be.</p>\n<p>The curves fundamentally have a logarithmic shape, approaching the asymptote of full fidelity but never achieving it.</p>\n<p>This means that at the beginning, one unit of effort leads to large increases in fidelity, but each additional unit of effort has strongly diminishing returns.</p>\n<p>Given that effort is finite, and there are many other things you could do with that effort that could plausibly have higher value, the closer you get to full fidelity, especially in new problem spaces, the more likely that you're wasting effort past the \"good enough\" point.</p>\n",
	  "title": "Perfection is infinitely expensive"
	},
	"c_088_cdb869": {
	  "body": "<p>Greed, also known as \"self-interest\" is a property that <card-link card=\"c_938_bda392\">fundamentally emerges, mathematically, from many systems</card-link>, it is an example of an emergent game.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">In a bottoms-up system, if you have two agents, one that has a slight preference to be a bit more greedy, and one that is a little less greedy, in time step t+1 you'll consistently expect to see more of the former and less of the latter; over time this compounds. In other words, the drive to defect and be a bit more greedy is inescapable. This arises mathematically in any emergent system with rivalrous resources.</span></p>\n<p>This is not to say that greed always runs rampant, just as gravity doesn't always dominate. In many cases other forces like cooperation can be stronger, where everyone realizes it's better for everyone collectively to have rules that limit what any one agent can do.</p>\n<p><strong>The notion that \"greed is good\" and should be worshiped is fundamentally and dangerously misguided</strong>. Greed is neither good nor bad, just as gravity is neither good nor bad--it just is. However, unchecked greed, just like any compounding loop without a <card-link card=\"c_226_cfd804\">balancing loop</card-link>, can create extremely bad outcomes for a system, leading to morally odious outcomes.</p>\n",
	  "title": "Greed is an emergent property"
	},
	"c_124_bec870": {
	  "body": "<p>If you have users who are already <card-link card=\"c_400_faf299\">crawling through broken glass</card-link> to accomplish a thing, and you have verified that the more people who do that thing, the better it is for your overall strategy (that is, you've verified that <card-link card=\"c_323_cef364\">you aren't selling dollars for 90 cents</card-link>), then you're in an amazing position.</p>\n<p>All you need to do is look for ways to reduce the amount of broken glass real, motivated users have to climb through--prioritizing features that build <card-link card=\"c_677_afa742\">foundations, not ceilings</card-link> and lay down <card-link card=\"g487aed6370_0_20\">infrastructure that compounds in value</card-link>.</p>\n<p>Then, you can focus on a few <card-link card=\"g48845643ff_0_191\">accelerants</card-link>, like creating a <card-link card=\"c_455_deb915\">focal point for your creators to share and inspire one another</card-link>.</p>\n<p>As you do this, you'll unlock value at a compounding rate, climbing your<card-link card=\"e2db4e\"> s-curve</card-link>.</p>\n<p>If you find yourself in this situation, <strong>don't <card-link card=\"c_453_aef240\">over-think it</card-link></strong>&nbsp;by trying to come up with a perfect or complex strategy. Just take advantage of it and execute.</p>\n",
	  "title": "With motivated creators, you don't need a complex strategy"
	},
	"c_163_efd204": {
	  "body": "<p><card-link card=\"c_226_cfd804\">Balancing loops</card-link> are loops that tend to bring feedback loops into check, creating the common s-curve.</p>\n<p>One fundamental balancing loop that applies to most systems is the fact that <strong>physical reality is rivalrous</strong>--there's only one copy of a given object, so if one agent has control over it another doesn't. It also means that moving something takes energy proportional to the mass and distance. This means that <card-link card=\"c-588-bdf708\">physical reality has way higher friction</card-link>.</p>\n<p>An example of this is in ecological ecosystems where the total amount of biomass in a system provides a fundamental cap to the number of predators.</p>\n<p>Because physical reality is so omnipresent as a balancing loop, we often take it for granted. This means that in systems where this loop is not salient, like virtual systems with zero marginal cost, can be dangerously mis-analyzed.</p>\n",
	  "title": "Rivalrous physical reality is a powerful balancing loop"
	},
	"c_226_cfd804": {
	  "title": "The importance of balancing loops",
	  "body": "<p>In <card-link card=\"g487aed6370_0_10\">systems theory</card-link>, there are feedback loops--loops that feed back on themselves and compound--and there are balancing loops, which act to keep systems in check.</p>\n<p>The interplay of feedback loops and balancing loops gives rise to the fundamental <card-link card=\"g487aed6370_0_146\">s-curve</card-link>.</p>\n<p>Balancing loops come in many forms, and arise naturally. For example, in an ecosystem, the total amount of biomass creates a natural balancing loops for how many predators can be supported. In a system of authority and power, an agent who is all-powerful will tend to have a revolution against them (when it gets sufficiently bad).</p>\n<p>If you don't have some kind of balancing loop, the feedback loop will tend to go on at an ever-accelerating rate, until the entire system is fully consumed.</p>\n<p>Types of balancing loops include the <card-link card=\"c_163_efd204\">rivalrous nature of physical reality</card-link> and <card-link card=\"c_549_bcf262\">regulation</card-link>.</p>\n"
	},
	"c_323_cef364": {
	  "title": "Be careful not to sell dollars for $0.90",
	  "body": "<p>When you're looking for product market fit, you're so motivated to find demand that sometimes it's tempting to accidentally give away something for far less than it's worth, and confuse that for product market fit.</p>\n<p>If you're giving away dollars for $0.90, evidence of strong demand isn't evidence of product market fit.</p>\n<p>This approach can be part of a reasoned strategy (build aggregated demand, then transition to a better monetized form of demand) but in practice it's very hard to verify whether you're doing that or just giving away too much value.</p>\n"
	},
	"c_371_dba806": {
	  "body": "<p><card-link card=\"c_625_ffb204\">Power in a system</card-link> comes in many forms, like <card-link card=\"g48845643ff_0_311\">credibility</card-link> (also known as informal authority).&nbsp;</p>\n<p>Formal authority is a concrete form of power within a system that is <strong>often represented as a hierarchy</strong>, and often in a formal way that is visible to everyone within the system.</p>\n<p>Note that formal authority isn't some objective truth within the system; it has influence only to the extent that other members of the system all agree the hierarchy is legitimate and relevant in a given context.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">For example, someone might have more credibility in a given context that allows them to override formal authority. However, this override often happens only in specific contexts between specific agents, and not in general; otherwise the hierarchy would be seen as illegitimate</span></p>\n<p>However, because hierarchies are often formally defined and core to the logic of a given system, they often have enormous power and are highly meta-stable in general; a majority of agents within a system must simultaneously agree it is illegitimate to overthrow it, which is only possible with a significant enough discontinuity.&nbsp;</p>\n",
	  "title": "Formal authority is a type of power related to hierarchies"
	},
	"c_397_cab917": {
	  "body": "<p><card-link card=\"c_226_cfd804\">Balancing loops</card-link> help create a natural check out of compounding loops.</p>\n<p>In an emergent system with <card-link card=\"c_163_efd204\">rivalrous resources</card-link>, competition over those resources can often provide a natural balancing loop that prevents any one agent from becoming all-powerful.</p>\n<p>This insight is sometimes described as making \"ambition check ambition\", and is deployed organically or intentionally in <card-link card=\"c_985_dda165\">many emergent systems</card-link>.</p>\n<p>This accepts that <card-link card=\"c_088_cdb869\">greed is a fundamental emergent propert</card-link>y, and the best way to deal with it in a system is not to pretend it doesn't exist, but rather ensure the system has adequate balancing loops to harness that energy to useful outcomes for society while ensuring it is fundamentally balanced.</p>\n",
	  "title": "Competition as a balancing loop"
	},
	"c_400_faf299": {
	  "body": "<p>If you have motivated users who are doing extremely high friction or challenging actions (\"crawling through broken glass\"), and yet they're <em>still </em>doing the action, that's <strong>strong </strong>evidence of extremely strong motivation.</p>\n<p>That means you almost certainly have a toehold. The next thing you need to do is simply reduce the friction, and you should trivially unlock more contributions, including from more people who might have slightly less motivation, and need the pain to be just a little less in order to crawl through it.</p>\n<p>In those cases, you've hit the lottery. You <card-link card=\"c_124_bec870\"><strong>don't need a very complex strategy</strong></card-link>--just reduce the broken glass they're crawling through!</p>\n",
	  "title": "If users are crawling through broken glass, they're motivated"
	},
	"c_428_bab903": {
	  "title": "Systems nest within other systems",
	  "body": "<p>Systems are not separate things; they all nest within other systems, all of which nest into the system of the universe. Every system has inputs and outputs (also called sources and sinks), but those inputs and outputs have to connect to something--the broader system it's a part of.</p>\n<p>Of course, if your unit of analysis is the system of the universe it becomes extremely difficult to understand how things relate, so in practice we will extract sub-systems that capture most of the salient moving pieces. Where to have the edge of the system you're studying is a choice you have to make.</p>\n<p>The game theory of a given system is most relevant within the context of that particular system, but the logic of the containing and contained systems are inextricably linked.</p>\n<p>Note also that there's not some objective hierarchy of systems; it's merely where you draw the lines at a given time for the given analysis at hand.</p>\n"
	},
	"c_453_aef240": {
	  "title": "When you have motivated users you can shortcut analysis",
	  "body": "<p>In many problem domains, you need to convince users who aren't very motivated to use your product--which requires you to use precise and expensive tools of user research, deeply sketched out critical user journeys, etc to build a product that might be useful.</p>\n<p>But if you have motivated users--which you definitely have if you have people <card-link card=\"c_400_faf299\">willing to crawl through broken glass</card-link>--then not only is your <card-link card=\"c_625_eda602\">product quality bar lower</card-link>, but you also can completely skip some of the most expensive analysis tools.</p>\n<p>In those cases, you can literally talk directly to your most motivated users. As long as you b<card-link card=\"c_677_afa742\">uild foundations, not ceilings</card-link>, and are steadily accreting more useful functionality that unlocks other adjacent use cases as well, then you don't have to overthink it; you'll see usage grow and over compound.</p>\n<p>In fact, in these cases some of the traditional random-sampled user studies can be <card-link card=\"c_970_bce901\">actively distracting</card-link>.</p>\n"
	},
	"c_455_deb915": {
	  "body": "<p>Motivated users are amazing, because the <card-link card=\"c_625_eda602\">bar for product quality is much lower</card-link> and you can harness some of their intrinsic energy to have a compounding loop.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">But if you have the </span><card-link style=\"background-color: transparent; font-size: 1em;\" card=\"g48845643ff_0_191\">enabler</card-link><span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\"> of motivated users, there are also a number of powerful </span><card-link style=\"background-color: transparent; font-size: 1em;\" card=\"g4a41d8c468_1_0\">accelerants</card-link><span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">.</span></p>\n<p>One is that <strong>motivated users can inspire one another to be more motivated</strong> if you give them a focal point (or, more colorfully, a \"watering hole\").&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">Even if you're motivated, there;'s some static </span><card-link style=\"background-color: transparent; font-size: 1em;\" card=\"g4a85094c68_0_40\">activation energy</card-link><span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\"> necessary to get you to actively do something. But if you have the right spark of inspiration, it can pull a user over that hump and get them created.&nbsp;</span></p>\n<p>Thriving community mailing lists are a great focal point for motivated users to share what they've built. Those messages will be little proactive jolts of inspiration to other users on the list delivered to their inbox even when they aren't thinking about the product, which might get them to create something. As more people create and share, the whole system runs hotter.</p>\n<p>Related to <card-link card=\"g4a6111ef7e_0_25\">lists are good accelerants</card-link>.&nbsp;</p>\n",
	  "title": "Focal points can help motivated users inspire one another"
	},
	"c_516_bbc140": {
	  "title": "Power differentials will compound in general",
	  "body": "<p>Power differentials are inescapable, although they might start out miniscule. However power differentials tend to compound, all other things equal.</p>\n<p>Over time, these compounding loops can become so strong, that if they aren't checked by some kind of balancing loop, they can grow to dominate a system.</p>\n<p>These compounding loops come for the same fundamental reason that <card-link card=\"g48845643ff_0_306\">credibility tends to compound</card-link>: <card-link card=\"g4a7499c914_0_15\">power begets power</card-link>. The more powerful you are, the bigger bets you can make (the larger your&nbsp;<card-link card=\"g487aed6370_0_0\">adjacent possible</card-link>), and the more likely you are to have powerful options within your grasp. Because <card-link card=\"c_088_cdb869\">greed is an emergent property</card-link>, agents tend to consistently prefer options that give them more power.&nbsp;</p>\n<p>This is one of the reasons it's extremely important to make sure there are balancing loops.</p>\n"
	},
	"c_549_bcf262": {
	  "title": "Regulation as a balancing loop",
	  "body": "<p>Regulation is another type of <card-link card=\"c_226_cfd804\">balancing loop</card-link>. Regulation is when the participants in a system agreed to be bound by rules that constrain the operative rules within a system. This is often the case when everyone realizes that the <card-link card=\"g48845643ff_0_95\">short-term incentive structures of individuals is dangerously misaligned with the long-term aggregate interest</card-link> and must be brought into check.</p>\n<p>For example, because <card-link card=\"c_516_bbc140\">power tends to compound</card-link>, within a total free market organizations will tend to become too-powerful monopolies, which break the fundamental competition balancing loop. Thus, anti-trust law is widely accepted as a necessary balancing loop.</p>\n<p>These rules must be enacted and enforced by a powerful entity in the system that has formal authority--in systems like society that is governments, although in other systems like a corporation it might be the CEO and their delegates.</p>\n<p>Regulation balancing loops become more important <card-link card=\"c_990_dcc851\">when other balancing loops don't apply</card-link>.</p>\n"
	},
	"c_579_abc424": {
	  "title": "Complex Adaptive Systems are everywhere",
	  "body": "<p>Complexity, <card-link card=\"g4a3ed6c576_0_29\">emergent</card-link> properties, and <card-link card=\"g487aed6370_0_10\">systems theory</card-link> converge in a concept called <strong>Complex Adaptive Systems</strong> (CAS).</p>\n<p>The primary focus of this compendium is on these types of systems, even when it refers to them only as \"complex systems\".</p>\n<p>Complex adaptive systems are systems that are composed of a number of agents governed by a set of rules. They're a useful lens to understand ecological ecosystems, evolution, democracy, capitalism, teams, internal corporate politics, etc.&nbsp;</p>\n<p>The essay <card-link href=\"https://medium.com/@komorama/the-energy-of-human-scale-systems-bc5411684563\">The Energy of Human-Scale Systems</card-link> digs into this concept implicitly, but doesn't name it explicitly (I didn't know the name when I wrote it!). The concept is foundationally developedin the book <card-link href=\"https://mitpress.mit.edu/books/signals-and-boundaries\">Signals and Boundaries</card-link> by John H. Holland.</p>\n"
	},
	"c_615_fae401": {
	  "body": "<p><card-link card=\"g48845643ff_0_443\">Motivated members of and ecosystem can help search the adjacent possible for you</card-link>, which is an amazing tailwind if it applies in your area.</p>\n<p>If you have a system where you know at least some people are motivated, <card-link card=\"c_625_eda602\">your bar is lower</card-link>, and you can focus on iteratively creating a thing that you think <em>plausibly </em>adds value.</p>\n<p>If you have a product that is Pre-Market-Fit, and a user who uses it and is not motivated will likely have a bad experience (making it unlikely they'll try again once it's better, and if it's bad enough, making it possible they also tell their friends to not use it), you want to ensure only motivated users try it out.</p>\n<p>Luckily, this is very easy. You can <strong>create a hoop to jump through that only pre-motivated users will have the energy to do. </strong>If you make a feature undiscoverable, don't market it, don't provide easy-to-use documentation, people who are not motivated will bounce off, but motivated users will stay. This general pattern is the <card-link card=\"c-809-fca917\">gauntlet pattern</card-link>.</p>\n",
	  "title": "Motivated users can self-select"
	},
	"c_625_eda602": {
	  "body": "<p>Many problem spaces have no intrinsically motivated users, and so they must design solutions extremely carefully to be totally sure that they solve a real user problem and will attract users. But in spaces that have some motivated users, if they start using the product they can create a toehold that can then grow to be a very large ecosystem.</p>\n<p>If at least some motivated users will find your thing (either because you're large enough that they'll hear about it in tech press, or because you're a member of an engaged sub-community), the test isn't actively ensuring that it's useful to some users, it's that <strong>it's <em>plausibly</em>&nbsp;useful to some motivated users</strong>.</p>\n<p>If you have a <card-link card=\"c_615_fae401\">mechanism that leads motivated users to self-select</card-link>, you've effectively de-risked the chance that people hate it.</p>\n",
	  "title": "If you have motivated users your product quality bar is lower"
	},
	"c_625_ffb204": {
	  "body": "<p>Power is the ability to influence <em>within the context of a specific system</em>. That is, the ability for an assertion to become a reality. Stated another way, <card-link card=\"c-772-ebe854\">power is the magnitude of the agent's adjacent possible</card-link>. Note that <card-link card=\"c_428_bab903\">systems nest</card-link>; power within a given system might not be relevant in the context of the containing system.</p>\n<p>Power is sometimes referred to as credibility (informal authority) or formal authority.</p>\n<p>Power is a spectrum, with different agents within a system having different power relative to one another that <em>varies with the specific context within the system</em>. For example, one agent might have a lot of power for making calls about who works on what due to their formal authority in the hierarchy, whereas another agent might have a lot of power for making calls about the UX design given their <card-link card=\"g48845643ff_0_311\">credibility</card-link> in that area of expertise.</p>\n",
	  "title": "Power is a measure of ability to get things done in a system"
	},
	"c_655_acb884": {
	  "title": "Power differentials are inescapable",
	  "body": "<p>Every system inherently has some kind of <card-link card=\"g4871092f30_0_1571\">power differential</card-link>, however minute, unless every single agent is precisely equal in every way. For example, even if all agents share the exact same properties as one another, but one agent has one additional link to another agent that others lack, it enjoys a slight power differential.</p>\n<p>And because <card-link card=\"c_516_bbc140\">power differentials compound</card-link>, over time a system without the right <card-link card=\"c_226_cfd804\">balancing loops </card-link>will lead to a highly unequal outcome. Even in the aftermath of the big bang there were minute density differences, that over time congealed into entire galaxies.</p>\n<p>This is not to say that power differentials are <em>good--</em>in fact in the limit they are almost always bad. But any plan that ignores power differentials will be doomed to failure, just as any mechanical design that ignores gravity will fail. For example, <card-link href=\"https://www.holacracy.org/\">Holacracy</card-link> is fundamentally flawed because it doesn't acknowledge power differentials always exist.</p>\n"
	},
	"c_674_cbe376": {
	  "title": "Land uncontroversial sub-arguments first",
	  "body": "<p>Often an argument has a number of controversial pieces that might derail the discussion.</p>\n<p>Arguments are built up of sub-arguments. Often a number of the necessary sub-arguments are not themselves controversial. And once a controversial argument is advanced, listeners are automatically on a more skeptical/defensive footing, meaning they're less likely to be convinced by even reasonable sub-arguments.</p>\n<p>Establish the sub-arguments whenever possible <em>before </em>making the broader argument. That means the delta of arguments you have to convince people of is kept as small as possible.</p>\n<p>This approach works well for socializing ideas both internally or in strategic external communications, if you know you have potentially controversial news to land in the future.</p>\n<p>Related to <card-link card=\"g48a31f22cb_0_20\">if you must have a performance discontinuity, derisk it</card-link>.</p>\n"
	},
	"c_677_afa742": {
	  "title": "Build foundations, not ceilings",
	  "body": "<p>If you have motivated users, always make sure the tools you build accrete to allow additional uses that you aren't sure if they exist.</p>\n<p>Similar to compounding value of infrastructure.</p>\n<p>This is one of the properties of <card-link card=\"c-144-fed076\">rational platforms</card-link>.</p>\n"
	},
	"c_727_bae256": {
	  "body": "<p><card-link card=\"c_163_efd204\">Physical reality is fundamentally rivalrous</card-link>, which gives rise to a fundamental and nearly omnipresent <card-link card=\"c_226_cfd804\">balancing loop</card-link>.&nbsp;</p>\n<p>Information, however, is fundamentally non-rivalrous. It can be copied, at full fidelity, in a way that does nothing to degrade the original. This means that systems that look superficially similar but have physical goods vs information at their core will adhere to fundamentally different behaviors.</p>\n<p>Technology has made the cost of copying effectively zero, and the rise of the internet has also made the cost of distribution effectively zero.&nbsp;</p>\n<p>This means that <card-link card=\"c_990_dcc851\">virtual ecosystems have fewer balancing loops</card-link>.</p>\n",
	  "title": "Information is fundamentally non-rivalrous"
	},
	"c_790_dad766": {
	  "title": "Abstract value needs to be 10x bigger than concrete value",
	  "body": "<p>When you have an abstract value that you're comparing against a concrete value, the abstract value is at a disadvantage. As a rule of thumb, <strong>the abstract value will have to be an order of magnitude larger than the concrete value to win</strong>.</p>\n<p>An abstract value is something that is speculative, in the future, or hard to measure. A concrete value is something that is existing, currently real, and easy to measure. For example, an abstract value might be the defensive value of a powerful ecosystem, and a concrete value might be revenue derived directly from fees paid by developers.</p>\n<p>Often in complex systems, incremental concrete value (5% more fees collected from developers) doesn't have compounding value, and the abstract value will be more important over the long term, but due to this imbalance, the short-term concrete value will tend to win.</p>\n<p>The reason for this is related to <card-link card=\"g48845643ff_0_265\">abstract ideas being harder to communicate</card-link>.</p>\n"
	},
	"c_819_bbf611": {
	  "body": "<p>A good rule of thumb for leaders (both managers, as well as leaders of a product) is that <em>on average</em>, after a 1:1 the other person is <strong>less </strong>stressed.</p>\n<p>This is because the leader should be able to empathize and understand the person's perspective, while incorporating it into a broader perspective calmly. This is especially important in complex environments, which are inherently stressful.</p>\n",
	  "title": "Good leaders have 1:1s that decrease stress"
	},
	"c_934_eee397": {
	  "body": "<p><card-link card=\"g48845643ff_0_167\">Compounding loops</card-link> are extremely powerful, and can lead to massively successful products.</p>\n<p>Because a successful compounding loop grows continuously and at an accelerating rate, it doesn't generally matter how small your starting point is. That means that even extremely small starting points that nevertheless have PMF in their niche can be extremely powerful, even if they don't look like much.</p>\n<p>If you have a space with motivated users, one of the best strategies is to focus on finding PMF with them first, and then ensuring that there's a compounding loops that will grow it far beynd that initial niche. For example, perhaps you have a new type of product that everyone needs a little bit, but some people need a lot. If you focus on the neediest users first, over time the word of mouth will help change the usage patterns of those who only needed it a bit.</p>\n<p>This is a more general formulation of <card-link card=\"b82320\">if you have a foothold and a network effect you're golden</card-link>.</p>\n",
	  "title": "The power of toeholds"
	},
	"c_938_bda392": {
	  "body": "<p>\"Games\", as in <card-link card=\"g4a3ed6c576_0_14\">game-theoretic</card-link> scenarios within complex systems, are <card-link card=\"g4a3ed6c576_0_29\">emergent</card-link>; they arise naturally out of the incentive structure of the system.</p>\n<p>They can be influenced by changing policies and rules of the game, but often only so much.</p>\n<p>Games are often ones that no individual actually likes but are still inescapable within that system as currently organized.</p>\n<p>There's no villain and no one did them \"on purpose\". Meaning that thinking \"it shouldn't have to be this way\" or \"I shouldn't have to play this game\" is tilting at windmills. You have no choice but to play the game.</p>\n",
	  "title": "Games are emergent and inescapable"
	},
	"c_970_bce901": {
	  "title": "Traditional UER can be distracting with motivated users",
	  "body": "<p>When you have motivated users, <card-link card=\"c_453_aef240\">you can often skip some of the most expensive analysis techniques</card-link>.&nbsp;<span style=\"background-color: transparent; color: var(--app-dark-text-color); font-size: 1em;\">But it can also be actively distracting to use some of the traditional techniques.&nbsp;</span></p>\n<p>First, it can add an unnecessary and obfuscating layer of abstraction when you can just talk to literal users directly.</p>\n<p>Second, because motivated users are almost always a <card-link card=\"g4a9e93532f_0_30\">very small segment of your population</card-link>, traditional random-sample UER techniques are unlikely to find the most important users, and even if you do, it treats differently-motivated users as equally valuable.</p>\n<p>This is the more general principle behind why \"<card-link card=\"g48845643ff_0_524\">developers are just users</card-link>\" is actively misleading.</p>\n"
	},
	"c_985_dda165": {
	  "title": "All emergent systems are fundamentally similar",
	  "body": "<p>Any emergent system, where the rules develop organically over time, has fundamentally similar characteristics and properties. Evolution, capitalism, and democracy are all fundamentally similar, just operating in slightly different mediums and at different time-scales.</p>\n<p>In all of the systems, many properties like it or not, are <card-link card=\"c_938_bda392\">emergent</card-link>--like <card-link card=\"c_088_cdb869\">greed</card-link>. The best way to affect these is not to ignore them, but to acknowledge they exist and enact deliberate <card-link card=\"c_226_cfd804\">balancing loops</card-link> to keep them in check. For example, a democratic system of checks and balances famously is designed to \"check ambition with ambition\". In evolution, the fact that there are only finite resources in the world fundamentally provides a balancing loop.&nbsp;</p>\n<p>Note that even systems that appear rigid and hierarchical are only plausible to the extent that <card-link card=\"c_371_dba806\">hierarchy is accepted within the system</card-link>, so even those systems are fundamentally emergent.</p>\n"
	},
	"c_990_dcc851": {
	  "body": "<p>The <card-link card=\"c_163_efd204\">rivalrous nature of physical reality</card-link> provides a natural, and nearly omnipresent, <card-link card=\"c_226_cfd804\">balancing loop</card-link>. But this creates a dangerous situation where in cases where that loop <em>doesn't </em>exist, we still apply the same analysis, to disastrous results.</p>\n<p>Virtual ecosystems are <card-link card=\"c_727_bae256\">defined by the fact that information can be copied cheaply</card-link>, meaning that it is naturally non-rivalrous. The Internet has also driven the cost of distribution down to effectively zero, meaning that for the first time there are many businesses with effectively <strong>zero-marginal cost </strong>at their core.</p>\n<p>This has taken away a powerful balancing loop that we take for granted, meaning that other loops, like <card-link card=\"c_549_bcf262\">regulation</card-link>, are far more important than they would be in other types of systems.</p>\n",
	  "title": "Virtual ecosystems have fewer balancing loops"
	},
	"cb36cf": {
	  "title": "Often a small number of variables can explain a system",
	  "body": "<p>Might be a dupe</p>\n<p>Feedback loops create non-linearities, continuous processes are often subtle.</p>\n<p>Agent based modelling is a great tool to uncover them quickly, and have confidence you've found them.</p>\n<p>Similar to NP-hard, where you don't know you have a solution until you have one</p>\n"
	},
	"da0a29": {
	  "title": "Who is this for?",
	  "body": "<ul>\n\t<li>Possibly no one. It’s primarily just a way to organize my own thoughts, in a way that is deep-linkable in case others want to use some of the assertions.</li>\n\t<li>It is extremely abstract for two reasons: that makes the parallels easier to spot, and it makes it easier to talk about principles without inadvertently shaming the people or teams involved in stories they’re based on.</li>\n\t<li>The insights are heavily biased in my personal experience:<ul>\n\t\t\t<li>Studying the power dynamics of open source projects in Social Studies in undergrad</li>\n\t\t\t<li>Discovering patterns to navigating a large, complex, bottoms-up company, where most people’s goals are aligned at a very high level</li>\n\t\t\t<li>Strategizing about the web ecosystem as Chrome’s Web Platform PM for many years</li>\n\t\t\t<li>Generally enjoying finding parallels between far-flung types of problems I read about</li>\n</ul>\n</li>\n\t<li>The insights are generally most applicable in those contexts, but often a sufficiently abstract insight can be applicable in many different contexts</li>\n</ul>\n"
	},
	"e2db4e": {
	  "body": "<p>\"<card-link card=\"c-537-eaf194\">Climbing a hil</card-link>l\", incrementalism to optimize adjcacent possible, etc are all about finding and then climbing an s-curve.</p>\n<p>An<card-link card=\"g487aed6370_0_146\"> s-curve</card-link> is a product market fit that's been found</p>\n",
	  "title": "S-curves are hills"
	},
	"g4871092f30_0_1526": {
	  "body": "<p>Take advantage of temporal discounting (abstract vs concrete) to figure out how important given thing is in the short term by imaginging how easily you’d commit to it if were 6 months in the future (or 3 years for big things)</p>\n",
	  "title": "Imagine the distant future to reveal your preferences"
	},
	"g4871092f30_0_1531": {
	  "body": "<p><card-link card=\"g487aed6370_0_306\">Bad structure is actively costly</card-link>, and in complexity it can often be unclear what the right answer is.</p>\n<p>So the safest thing is to <strong>formalize how things </strong><strong><em>already </em></strong><strong>informally worked</strong>. If you are still <card-link card=\"g4871092f30_0_1581\">regularly being surprised</card-link>, that’s a sign it’s too early to structure that part of the problem.</p>\n<p>Resist the urge to overly formalize too much--it’s likely that the underlying dynamics are more subtle than you thought. Start with a <card-link card=\"g48845643ff_0_105\">loose structure and tighten as your rate of surprise goes down</card-link>.</p>\n",
	  "title": "Process should only retroactively pave cowpaths"
	},
	"g4871092f30_0_1536": {
	  "title": "Process amount should be proportional to complicatedness",
	  "body": "<p>In complex environments, process is bad because breaks flexibility as you learn</p>\n<p>If you get it wrong, it requires constant energy to overcome the mismatch, which can come to dominate.</p>\n<p>One way this manifests is trying to apply a rigid process to a bottoms-up culture.</p>\n"
	},
	"g4871092f30_0_1541": {
	  "body": "<p><card-link card=\"c-457-dab199\">Friction is a fundamental dynamic of systems</card-link>, tied to how much energy must be expended to do useful things.</p>\n<p>Leads to more burden (more energy has to be put in to overcome it)</p>\n<p>Friction in terms of how far outside of <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> it is (which can include marketing, distribution cost, and cost of getting users to develop new usage pattern). Friction in terms of mismatch of structure to the underlying complexity.</p>\n<p>More friction increases the static a priori possibility that an explosion happens, which can then spiral out of control</p>\n<p>Nearly every problem space has abundant (and often non-obvious) friction. See also <card-link card=\"g48845643ff_0_260\">progress takes a constant influx of energy</card-link>.</p>\n",
	  "title": "Friction takes energy to overcome"
	},
	"g4871092f30_0_1546": {
	  "body": "<p>If two peers in the same function and area are peers and one of them isn’t clearly the lead it creates <card-link card=\"g4871092f30_0_1541\">friction</card-link></p>\n<p>Especially if they have <em>different </em>skills, because each won’t actively recognize how great it is the other ahs complimentary skills, because they’re in zero-sum</p>\n",
	  "title": "Two peers with different skills creates friction"
	},
	"g4871092f30_0_1551": {
	  "title": "Decision Making is not a magic moment",
	  "body": "<p>It should be more rubber stamping than a discontinuity</p>\n<p>Leads should instead act as referees, ensuring all of the various insights and perspectives are considered appropriately, from a <card-link card=\"g4871092f30_0_1561\">positive-sum perspective</card-link></p>\n<p>Lead is a shepherd, not a driver</p>\n<p>People often rely on decision making as a<card-link card=\"g487aed6370_0_71\"> crutch for clarity</card-link> in complex environments, but that’s an illusion</p>\n<p>There’s no substitute for collaborative debate in a complex environment</p>\n"
	},
	"g4871092f30_0_1561": {
	  "body": "<p>People “in” it with things to gain can’t be zero sum</p>\n<p>Leaders who are responsible for the entire scope of all of the problems (formally, or informally) are naturally in a zero-sum perspective</p>\n",
	  "title": "A Positive-Sum Perspective is necessary for good decisions"
	},
	"g4871092f30_0_1566": {
	  "body": "<p>In promotion environments, the things that are easiest to measure concretely are the easiest to convince people of in an anonymous committee</p>\n<p>So there’s already a bias.</p>\n<p>But often the most important superpowers are the ones that are hardest to measure; nuance, insight, long-term thinking. (McNamara fallacy)</p>\n<p>The only way to help with this is for suficiently senior leadership to provide extra support and context and calibration about how that person is different than the ladder and that’s <em>what makes them special</em></p>\n",
	  "title": "Leads need to support the nuanced superpowers\t"
	},
	"g4871092f30_0_1571": {
	  "title": "Power differentials exist everywhere",
	  "body": "<p><card-link card=\"c-772-ebe854\">Power</card-link> differentials are often called “leverage,” and they exist in almost every human interaction. They are the difference in power between two agents. In formalized organizational structure, they manifest as management structure and the level of individuals. <card-link card=\"g487aed6370_0_186\">Privilege</card-link> is also a form of power differential.</p>\n<p>Humans have a deep, intuitive sense for when they are at the weak end of a power differential and will tend to respond with <card-link card=\"g487aed6370_0_171\">emotional intensity</card-link> because <card-link card=\"g487aed6370_0_181\">the stakes are high</card-link>.</p>\n<p>Power structures exist even if they are not formalized. Formalizing power structures, to the extent they match to the actual operative power structures, is an example of reducing complexity to mere complication <card-link card=\"g487aed6370_0_306\">via structure</card-link>.</p>\n"
	},
	"g4871092f30_0_1581": {
	  "body": "<p>How often you or the team are getting surprised by new information or insights is the best predictor of how complex the problem space still is</p>\n<p>As clarity is brought to a problem space and complexity is reduced to mere complication, the rate of surprise lowers</p>\n<p>Uncertain systems are more likely to need to be treated as <card-link card=\"c-948-ddc935\">complex systems</card-link>.</p>\n",
	  "title": "Rate of Surprise tells you how much uncertainty there is"
	},
	"g487aed6370_0_0": {
	  "body": "<p>The <card-link href=\"http://www.practicallyefficient.com/2010/09/28/the-adjacent-possible.html\">adjacent possible</card-link> is the collection of actions and outcomes that neighbor the current situation for a team or problem space. It’s the set of outcomes that could be achieved with no <card-link card=\"g487aed6370_0_241\">discontinuity</card-link>.</p>\n<p>Moving between adjacent possible states is often called “<card-link card=\"g48845643ff_0_484\">incrementalism</card-link>”, but in complex spaces where <card-link card=\"g48845643ff_0_155\">many possible configurations would not work</card-link>, it is the only approach to making progress--so long as you’re guided by a <card-link card=\"g487aed6370_0_81\">north-star</card-link> for direction.</p>\n<p>Solutions in the adjacent possible often <card-link card=\"g487aed6370_0_261\">have the wind at their back</card-link>, because they harness and fit within existing momentums and power structures within the system. The adjacent possibilities to a system in equilibrium are often themselves configurations in a state of equilibrium. Often you can <card-link card=\"g48845643ff_0_132\">harness energy of other agents</card-link> to search the space of the adjacent possible for you and prioritize ideas.</p>\n",
	  "title": "The adjacent possible: non-miraculous and incremental "
	},
	"g487aed6370_0_10": {
	  "title": "Systems Theory is a powerful lens in complex spaces",
	  "body": "<p>Systems theory is a tool that charts out feedback loops between various entities in a system. It can be used to model everything from a thermostat up to massive human-scale systems.</p>\n<p>By far the best primer is <card-link href=\"https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557\">Thinking in Systems by Donella H. Meadows</card-link>. It’s roughly a three hour read, full of concrete examples to illustrate high-level insights.</p>\n<p>Although systems theory is typically applied to mapping out a web of fundamentally straight-forward processes, it can also be successfully applied to human incentives and how those change over time.</p>\n<p>No <card-link card=\"g487aed6370_0_111\">lens is all-powerful</card-link>, but systems theory is often one of the best to understand highly complex problems.</p>\n<p>Systems theory is combined with game theory and complexity theory in the concept of <card-link card=\"c_579_abc424\">complex adaptive systems</card-link>.</p>\n"
	},
	"g487aed6370_0_101": {
	  "title": "Politics is human emotion at scale",
	  "body": "<p>“Politics” has a negative connotation, and it’s tempting to think “we’re a healthy team, we don’t have politics here.”</p>\n<p>But there’s a difference between <strong>active </strong>politics and <strong>passive </strong>politics. Active politics is manipulative and intentional. Passive politics is merely emotion at scale, and requires no malice or bad intent on behalf of anyone to manifest.</p>\n<p>Passive politics exists everywhere that humans work together as a powerful and omnipresent force. Ignoring it is dangerous; it would be like ignoring gravity when designing a rocket. There’s a difference between <card-link card=\"g48845643ff_0_291\">navigating politics and playing politics</card-link>.</p>\n<p>This is the primary reason a<card-link card=\"g487aed6370_0_96\">ll problems that involve humans--even incidentally--are complex</card-link>.</p>\n"
	},
	"g487aed6370_0_106": {
	  "title": "Complex problem spaces require critical thinking",
	  "body": "<p>Complex spaces require you to <card-link card=\"g487aed6370_0_111\">apply different lenses</card-link> to the problem to uncover insights. But there’s no one-size-fits-all approach.</p>\n<p>Fundamentally you must apply critical thinking and introspection via <card-link card=\"g487aed6370_0_35\">collaborative debate</card-link>.</p>\n<p>If it were possible to have a worksheet or other framework <card-link card=\"g487aed6370_0_121\">deliver insights without critical thinking</card-link>, then your problem space would be complicated, not complex.</p>\n"
	},
	"g487aed6370_0_111": {
	  "title": "Lenses mine insights from information",
	  "body": "<p><card-link card=\"g487aed6370_0_50\">Insights reduce complexity to mere complication</card-link>. Information is a collection of both underlying data, as well as other insights. <strong>Lenses are the tools that are used to mine insights from information, </strong>and can often be applied best in <card-link card=\"g487aed6370_0_35\">collaborative debate</card-link>.</p>\n<p>How useful a lens is is entirely contextual. A lens might be extremely productive at the beginning, but get less useful as all applicable insights in this space are mined, meaning that other lenses become relatively more productive.</p>\n<p><strong>Think of these tools as lenses, not frameworks</strong>, to emphasize that the lens should <card-link card=\"g487aed6370_0_121\">guide thinking, not replace it</card-link>.</p>\n<p>There is no one true lens; a complex space requires applying a <card-link card=\"g487aed6370_0_116\">diversity of lenses</card-link>. The over-application of any single lens leads to it replacing thinking, and is dangerous because <card-link card=\"g487aed6370_0_40\">all problem spaces are complex</card-link>.</p>\n"
	},
	"g487aed6370_0_116": {
	  "body": "<p>It’s important to <card-link card=\"g487aed6370_0_111\">use different lenses</card-link>. Here’s a quick overview of some.</p>\n<ul>\n\t<li><card-link card=\"g4a3ed6c576_0_34\">Critical User Journeys</card-link></li>\n\t<li><card-link card=\"g48a31f22cb_0_66\">Historical Parallel</card-link></li>\n\t<li><card-link card=\"g48a31f22cb_0_61\">Metaphor</card-link></li>\n\t<li><card-link card=\"g4a3ed6c576_0_54\">Varying Time-Scales</card-link></li>\n\t<li><card-link card=\"g487aed6370_0_10\">Systems Theory</card-link></li>\n\t<li><card-link card=\"g4a3ed6c576_0_14\">Game Theory</card-link></li>\n\t<li><card-link card=\"g4a3ed6c576_0_19\">Simulations</card-link></li>\n\t<li><card-link card=\"g487aed6370_0_151\">Asking Why</card-link></li>\n</ul>\n",
	  "title": "Use a diversity of lenses"
	},
	"g487aed6370_0_121": {
	  "title": "Structure should guide thinking, not replace it",
	  "body": "<p>Structure can be applied to complicated problem spaces to help make them more efficient, by reducing ambiguity and giving good defaults.</p>\n<p>But <card-link card=\"g487aed6370_0_40\">all problem spaces are fundamentally complex</card-link>, and structure over time tends to lock in things that are no longer true, meaning it can come to obscure the right answers. Fundamentally complex spaces require <card-link card=\"g487aed6370_0_141\">curiosity</card-link> and <card-link card=\"g487aed6370_0_106\">critical thinking</card-link>. <card-link card=\"c-565-eae389\">Structure can give blindspots</card-link>.</p>\n<p>Note that as time goes on, any structure (process or framework) in place will tend to ossify, as more and more of the team has joined only after it was in place, and not be familiar with the underlying thinking. When this happens, often <card-link card=\"g487aed6370_0_151\">no one can answer why</card-link>.</p>\n<p>An application of this insight is that <card-link card=\"g4871092f30_0_1531\">process should only formalize how things already work</card-link>.</p>\n"
	},
	"g487aed6370_0_131": {
	  "body": "<p>In a complex space, it’s tempting to have no opinion because <card-link card=\"g487aed6370_0_66\">everything is gray</card-link>, but actually those are the spaces where rigorous debate is the <em>most </em>necessary. Because people by default won’t take strong positions in these spaces, it’s often up to the leader to do it, to give something for others to react to and build off of.</p>\n<p>This is sometimes articulated as “strong opinions, weakly held”.  You should debate rigorously but respectfully, and <card-link card=\"g487aed6370_0_141\">always be curious</card-link>, and <card-link card=\"g4871092f30_0_1571\">aware of your power differential</card-link>. <strong>Nearly everyone aspires to this standard, but nearly no one achieves it </strong>in practice.</p>\n<p>In practice it’s extremely hard to hold yourself to this standard if you have formal power in the team, because of <card-link card=\"g487aed6370_0_136\">a toxic but extremely common spiral</card-link>. As a lead you must take <strong>active, intentional, </strong>and <strong>constant </strong>steps to ensure that you are not creating an echo chamber around your ideas.</p>\n",
	  "title": "Leadership means a strong but flexible opinion"
	},
	"g487aed6370_0_136": {
	  "title": "Squelching dissent is a toxic spiral",
	  "body": "<p><card-link card=\"g4871092f30_0_1571\">Power differentials exist everywhere</card-link>, meaning even small gestures in a <card-link card=\"g487aed6370_0_35\">collaborative debate</card-link> environment can start to compound as people see that engaging in debate with a leader is punished--even if that punishment is extremely subtle and unintentional.</p>\n<p>As people dissent less, leaders get less and less feedback that their ideas aren’t correct, making then even more confident that they’re right, in a version of <card-link card=\"g48845643ff_0_408\">compounding confirmation bias</card-link>.</p>\n<p>This can accelerate, especially for people in formal positions of power until the core team is comprised entirely of yes-people, and recovery is nearly impossible.</p>\n<p>This exact same mechanism (just with a higher-stakes power differential) is at the core of why dictatorships fundamentally don’t work.</p>\n"
	},
	"g487aed6370_0_141": {
	  "title": "Curiosity is a fundamental requirement in complex spaces",
	  "body": "<p>Curiosity means willingness to entertain new ideas, even ones that seem initially silly or unrelated. This can take the form of new <card-link card=\"g487aed6370_0_116\">lenses</card-link> or new information.</p>\n<p>Someone who is curious, when <card-link card=\"g4871092f30_0_1581\">presented with something surprising</card-link>, will dig in and seek to earnestly understand and learn from it. Sometimes called “open-mindedness”</p>\n<p>Curiosity means being comfortable with ambiguity and not being <card-link card=\"g487aed6370_0_286\">overly tempted to artificially reduce interesting phenomena to misleading details too early</card-link>.</p>\n<p>If you <card-link card=\"g4871092f30_0_1581\">find yourself surprised</card-link> by any information at all, then that’s a sign that there’s something you’ve been missing that could possibly be a salient constraint and you should dig in.</p>\n"
	},
	"g487aed6370_0_146": {
	  "body": "<p>The s-curve is an outcome that arises naturally in many complex systems . It shows up, for example, when a new era of computing comes along, as things like smartphone adoption hit an inflection point and grow highly non-linearly, before reaching saturation and plateauing.</p>\n<p>The reason they happen is some kind of <card-link card=\"g48845643ff_0_167\">compounding loop</card-link> in the first stage, which then runs into a <card-link card=\"c_226_cfd804\">balancing loop</card-link> in the later stage. We typically only talk about the \"hockey-stick\" portion of the graph, but every phenomenon has a balancing loop--it just might be that it takes a long time to hit it, depending on the properties of the system. For example, if there's adoption of a feature among owners of a niche computing device, the balancing loop is the number of people with that device.</p>\n<p>The balancing loop, in this context, is also referred to by Eugene Wei as the <card-link href=\"https://www.eugenewei.com/blog/2018/5/21/invisible-asymptotes\"><strong>invisible asymptote</strong></card-link>.&nbsp; Note that these balancing loops are not fundamentally fixed--it can move. In the example above, you could move the balancing loop up by having more people buy the device in question (perhaps because the use case is so great).</p>\n",
	  "title": "The s-curve is fundamental"
	},
	"g487aed6370_0_15": {
	  "body": "<p>When using a <card-link card=\"g487aed6370_0_10\">systems theory lens</card-link>, there are a number of compounding effects:</p>\n<ul>\n\t<li>Network effects</li>\n\t<li>Two-sided market (Developers + Users)</li>\n\t<li>Infrastructure</li>\n\t<li>Certain game theory incentive structures</li>\n</ul>\n",
	  "title": "The types of compounding effects"
	},
	"g487aed6370_0_151": {
	  "title": "The power of asking “Why?”",
	  "body": "<p>If you’re in a problem space and can’t figure out where to start, the simplest question is to just ask “Why?”. It forces you to think about the <strong>end</strong> you’re trying to achieve, and to break into a broader, more abstract perspective that’s not as tied to the details of the situation today.</p>\n<p>The answers to these stack on top of one another and generally top out at something like “to ensure the thriving of humanity”. It often takes 5-6 repeated stackings of “Why?” to top out at this.</p>\n<p>If any of the “Why?”s in your stack don’t have a clear answer, that’s a good sign that you’ve gotten trapped into <card-link card=\"g487aed6370_0_156\">confusing means for ends</card-link>.</p>\n"
	},
	"g487aed6370_0_156": {
	  "body": "<p>The end is the “what” you want to accomplish. The means is simply the “how”; important to have a plausible approach but unimportant in and of itself.</p>\n<p>Because people tend to <card-link card=\"g487aed6370_0_71\">avoid abstract thinking and cling to detail</card-link> and over time teams tend to <card-link card=\"g487aed6370_0_121\">let their structure replace their thinking</card-link>, a team that was set up correctly to achieve a given end can often forget the end they were aiming for and instead become overly focused on sustaining the means.</p>\n<p>The end is your <card-link card=\"g487aed6370_0_81\">northstar</card-link>, the <card-link card=\"g487aed6370_0_76\">direction you should go</card-link>. If you forget your northstar, you’ll be lost. You’ll continue on auto-pilot, and small directional errors will compound over years, potentially putting you badly off course.</p>\n<p>If you can’t <card-link card=\"g487aed6370_0_151\">answer “Why?”</card-link> then it’s likely you’re confusing your means for an end. Teams will tend to violently resist detecting this in themselves.</p>\n",
	  "title": "Beware confusing means for ends"
	},
	"g487aed6370_0_161": {
	  "body": "<p>This includes constraints that aren’t obvious, or that you <em>wish</em> didn’t apply in your problem space, or that your leadership told you (erroneously) to ignore.</p>\n<p>This can also be stated as good ideas must be <strong><card-link card=\"g487aed6370_0_241\">plausible without miracles </card-link></strong>in all salient ways, even ways that aren’t obvious.</p>\n<p><card-link card=\"g48845643ff_0_66\">Constraints take many forms</card-link>, like whether the ideas will be easy to socialize, will fit within office politics, etc. <strong>Human constraints are real, powerful, and omnipresent</strong>, and any idea that doesn’t <card-link card=\"g48845643ff_1_5\">fit within them will fail</card-link>.</p>\n<p>Related to the <card-link card=\"c-166-adf525\">goodness of ideas is entirely contextual</card-link>; the operative constraints are a large part of the context the idea operates within.</p>\n",
	  "title": "Ideas are only good if they don’t violate constraints"
	},
	"g487aed6370_0_166": {
	  "title": "The conditions for collaborative debate must be created",
	  "body": "<p>Collaborative debate requires intellectual intensity and rigor, but by default <card-link card=\"g487aed6370_0_171\">intensity explodes into emotional intensity</card-link>. That means the<strong> conditions have to be actively created</strong>.</p>\n<p>First and foremost, the space must be <strong>psychologically safe</strong> for all participants. That is a fundamental requirement. This requires active work to intentionally set, model, and reward the right culture within a team. This work must be constantly ongoing.</p>\n<p>Then you must be intentional about <strong>minimizing emotional escalators</strong>--even the subtle ones--including <card-link card=\"g487aed6370_0_176\">us-vs-them thinking</card-link>, <card-link card=\"g487aed6370_0_181\">high stakes</card-link>, and unnecessary <card-link card=\"g4871092f30_0_1571\">power differentials</card-link>, including those caused by <card-link card=\"g487aed6370_0_186\">privilege</card-link>.</p>\n"
	},
	"g487aed6370_0_171": {
	  "body": "<p>There are two types of intensity: <strong>intellectual</strong> intensity (the “good” kind, that’s necessary for rigorous <card-link card=\"g487aed6370_0_35\">collaborative debate</card-link>), and <strong>emotional</strong> intensity (the “bad” kind, at least in a work environment).</p>\n<p>Humans are not robots. <strong>Emotions are a fact of life</strong>, and evolutionary biology tells us that they a key <em>feature</em> is that they are intense and overwhelming. <strong></strong></p>\n<p>Humans have a tendency to interpret <em>any </em>intensity as emotional intensity, especially if there’s a <card-link card=\"g4871092f30_0_1571\">power differential</card-link> in place. And once any participant has diagnosed it as emotional intensity, it <em>is </em>emotional intensity. That intensity will compound, activating emotional intensity for <em>all</em> participants. <strong>Emotional intensity is viral</strong>.</p>\n<p><strong>Emotionally intense discussions cannot be intellectually productive. </strong>That’s why you must <card-link card=\"g487aed6370_0_166\">carefully create the conditions for collaborative debate</card-link>.</p>\n",
	  "title": "Emotional intensity overrides intellectual intensity"
	},
	"g487aed6370_0_176": {
	  "title": "The nasty trap of Us-vs-Them",
	  "body": "<p>Humans are innately wired to split groups into two sides: one that contains “us”, and the other that contains “them”. The <card-link href=\"https://en.wikipedia.org/wiki/Fundamental_attribution_error\">fundamental attribution error</card-link> means that we give ourselves a pass, meaning that we always see the “us” group as superior.</p>\n<p>Because <card-link card=\"g4871092f30_0_1571\">power differentials exist everywhere</card-link>, creating the <card-link card=\"g487aed6370_0_171\">conditions for emotional intensity which has a compounding effect</card-link>, this us-vs-them distinction can escalate to extreme lengths--in the most heinous cases to literal genocides.</p>\n<p>This can happen over even completely arbitrary and random properties, like splitting a group into a <card-link href=\"https://www.age-of-the-sage.org/psychology/social/sherif_robbers_cave_experiment.html\">red team and blue team</card-link>, and workplace situations are rife with differences (product area, which office you work in, your team’s cultural style, functional ladder).</p>\n<p>The <card-link card=\"g487aed6370_0_191\">dynamic is sometimes harnessed to do useful work, but should never be because it is fundamentally toxic</card-link>. Watch out for the <card-link card=\"g487aed6370_0_201\">risk factor</card-link>s that predict it.</p>\n"
	},
	"g487aed6370_0_181": {
	  "title": "Stakes are often inadvertently high",
	  "body": "<p>High stakes are one of the things that cause <card-link card=\"g487aed6370_0_171\">emotional intensity</card-link>. The stakes are often inadvertently high, or high only for certain participants. Because these dynamics are subtle and inconvenient, groups tend to ignore them, deliberately or accidentally.</p>\n<p>Some of the things that cause high stakes:</p>\n<ul>\n\t<li><strong><span class=\"small\">Decisions</span></strong><span class=\"small\"> If a decision is being made that has effects on some people in the discussion, the stakes are high, and that is not a good forum for </span><span class=\"small\"><card-link card=\"g487aed6370_0_35\">collaborative debate</card-link></span><span class=\"small\">.</span></li>\n\t<li><strong><span class=\"small\">Seniority </span></strong><span class=\"small\">No one wants to look dumb in front of people who are more senior, so the stakes are often automatically high when there’s a senior person in the room. Often, the only way for true collaborative debate to occur is for senior participants to deliberately not attend the </span><span class=\"small\"><card-link card=\"g487aed6370_0_5\">discovery portion, but be present only for the performance portion</card-link></span><span class=\"small\">.</span></li>\n\t<li><strong><span class=\"small\">Large Audiences </span></strong><span class=\"small\">The more people present, the more people to witness any potential embarrassment, making things higher stakes. Remember that this is true for written communication as well, for any e-mails that are to a large list, or that may be inadvertently forwarded to one later.</span></li>\n</ul>\n"
	},
	"g487aed6370_0_186": {
	  "title": "Privilege as a power differential",
	  "body": "<p><card-link card=\"g4871092f30_0_1571\">Power differentials</card-link> are omnipresent. Privilege is a key type of power differential that is particularly insidious because it is often invisible to those who wield it.</p>\n<p>Privilege is contextual, it is any aspect of a person that has led them to have the <strong>wind at their back</strong> in some way. Because those who have it in a given context have never <em>not</em> had it, it intuitively but incorrectly feels like the default that <em>everyone</em> experiences.</p>\n<p>If you have privilege it is on <em>you</em> to educate yourself, by watching videos and reading books by people who do not have that privilege. Even once you have educated yourself, it is extremely easy to forget, because being aware of your privilege takes <strong>active mental effort</strong>. Be on the lookout for signs your privilege is manifesting in a given situation.</p>\n<p><em>See also the </em><em><card-link href=\"http://www.guidetoallyship.com/\">boots vs sandals</card-link></em><em> metaphor on guidetoallyshiip.com to understand privilege</em>.</p>\n"
	},
	"g487aed6370_0_191": {
	  "title": "The us-vs-them dynamic is fundamentally toxic",
	  "body": "<p>The <card-link card=\"g487aed6370_0_191\">us-vs-them</card-link> dynamic is very real and can escalate quickly.</p>\n<p>The dynamic is obviously toxic <strong>between </strong>groups, but unfortunately it can be an extremely powerful motivator <strong>within </strong>groups. That means that it is often tempting to harness this motivator within a team--or fall into a trap of relying on it inadvertently.</p>\n<p>But the <strong>dynamic is fundamentally toxic</strong>. It can escalate to dangerous levels, and even if the “other” team is far away organizationally, the effect can get strong enough to be toxic even at the company-wide or even society-wide level.</p>\n<p>It also often obscures the <card-link card=\"g487aed6370_0_151\">why</card-link> by framing your goals in opposition to another group and contaminates the <card-link card=\"g487aed6370_0_81\">long-term goals and priorities</card-link> for a team, which can lead the team to tackle the wrong problems.</p>\n"
	},
	"g487aed6370_0_196": {
	  "body": "<p>When socializing an idea, you want to <card-link card=\"g48a31f22cb_0_10\">minimize discontinuities and risk</card-link>.</p>\n<p><card-link card=\"g487aed6370_0_181\">Stakes go up exponentially with the number of participants</card-link>, so 1:1s are the lowest stakes by far. This creates the ideal conditions for a frank, <card-link card=\"g487aed6370_0_35\">collaborative debate</card-link>. 1:1s should always be in “<card-link card=\"g487aed6370_0_5\">discovery</card-link>” mode--be on the lookout for new insights and constraints that you didn’t already know about.</p>\n<p>If things have gotten <card-link card=\"g487aed6370_0_171\">emotionally intense</card-link> in the team, talking with various people 1:1 will often uncover what’s actually going on and how best you can help the right thing happen.</p>\n<p>At the beginning of the 1:1, take steps to create a frank environment by sharing your own perspective, even if it’s embarrassing, or calling out the elephant in the room for the broader team, showing you see inconvenient or awkward problems clearly.</p>\n",
	  "title": "1:1s are magic"
	},
	"g487aed6370_0_20": {
	  "body": "<p>One of the forgotten <card-link card=\"g487aed6370_0_15\">compounding effects</card-link>. Allows you to automate a thing you did previously at a high constant factor of energy… for free. Think of infra as expanding the option value of your capabilities and locking them in. Infrastructure for external developers can kick off an additional compounding effect by enabling the 3P developers to tackle new and larger problems, creating more demand.</p>\n<p>Infra automates things, freeing up energy for other things, but also brings new things into the <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> that it wouldn’t have made sense to focus on on their own. Similar dynamics to the value of capital investment in capital-intensive businesses.</p>\n<p>The infra has to be <em>useful</em>--actually helps with <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> things. Beware the <card-link card=\"g48845643ff_0_453\">myth of infrastructure</card-link>: infra must be demonstrably useful in short to medium term. Aim for 80% efficiency of infra for the current concrete need, with 20% being over built that is aligned with your <card-link card=\"g487aed6370_0_81\">north star</card-link>. You should also make sure your infrastructure is structurally <card-link card=\"c-144-fed076\"><strong>rationally as a platform</strong></card-link>.</p>\n",
	  "title": "The compounding effect of infrastructure"
	},
	"g487aed6370_0_201": {
	  "title": "Us-vs-them risk factors",
	  "body": "<p>The <card-link card=\"g487aed6370_0_176\">us-vs-them</card-link> factor can apply anywhere, but certain risk factors make it more likely. If these apply, the best bet is to do <card-link card=\"g487aed6370_0_207\">preventative maintenance</card-link>.</p>\n<p><strong>Substantially different cultures on the different sub-teams</strong> Different groups will fail to recognize the value of the other team, while feeling undervalued themselves.</p>\n<p><strong>Time-horizon mismatch.</strong> One group will want to invest time on deep discussions, and another group will find every moment not spent on execution makes the fires worse.</p>\n<p><strong>Split Benefit/Cost</strong> When one sub-team accrues most of the benefit, but another sub-team pays most the cost, friction is likely, especially if the costs or benefit are hard to quantity.</p>\n"
	},
	"g487aed6370_0_207": {
	  "body": "<p>When<card-link card=\"g487aed6370_0_176\"> us-vs-them</card-link> triggers, it can compound so quickly that it’s hard to stop. The best approach is to invest in preventative maintenance when the <card-link card=\"g487aed6370_0_201\">risk factors are present</card-link>. You don’t know precisely <em>what </em>will trigger the toxic spiral, you know that it’s more likely in these cases. Preventative maintenance gives resilience to whether those bumps.</p>\n<p>The best preventative maintenance is <strong>low-stakes face-to-face interactions</strong>. When people see the other people as fellow humans who are trying to do the right thing, it helps inoculate the most toxic parts of the “them” reaction.</p>\n<p><strong>Shared team identity </strong>(making the entirety of the group one big “us”) can also be worth it, but can be extremely expensive, so only do it <card-link card=\"g487aed6370_0_212\">when it will be worth it</card-link>. Also be careful that you don’t create a <em>different </em>“them” that the whole group is in opposition to.</p>\n",
	  "title": "Preventative maintenance for team culture"
	},
	"g487aed6370_0_212": {
	  "title": "When is preventative maintenance worth it?",
	  "body": "<p><card-link card=\"g487aed6370_0_207\">Preventative maintenance of team culture</card-link> is the best way to deal with <card-link card=\"g487aed6370_0_176\">us-vs-them</card-link>, but it’s expensive.</p>\n<p>It’s <em>always</em> worth it for the core group of people who will work together often. For other cases, invest according to <strong>how closely the group will have to work together, multiplied by the </strong><strong><card-link card=\"g487aed6370_0_201\">risk factors</card-link></strong><card-link card=\"g487aed6370_0_201\">.</card-link></p>\n<p>The energy to build team cohesion goes up exponentially with how many people are in it, and gets significantly more expensive the farther afield the various groups are (in org structure, cultural values, physical location).</p>\n"
	},
	"g487aed6370_0_226": {
	  "body": "<p>The McNamara fallacy states, roughly, that <card-link href=\"https://en.wikipedia.org/wiki/McNamara_fallacy\">things that cannot be measured do not matter</card-link>.</p>\n<p>Although this can be true in some obvious problem spaces, and even, sometimes, in complicated ones, it is untrue in complex problem spaces. In fact, in <strong>complex problem spaces often the factors that can’t be measured are the </strong><strong><em>most</em></strong><strong> important</strong>.</p>\n<p>Complex problem spaces often have highly emergent, compounding properties that mean that subtle differences in incentives, problem structure, or momentum can lead to vastly different outcomes.</p>\n<p>The McNamara fallacy arises partially from the same underlying principle that leads to <card-link card=\"g48845643ff_0_265\">abstract ideas being hard to communicate at scale</card-link>.</p>\n",
	  "title": "McNamara fallacy: What can't be measured doesn't matter"
	},
	"g487aed6370_0_231": {
	  "body": "<p>In practice there are lots of <strong><card-link card=\"c-229-aee912\">zig or zag decisions day to day</card-link> where either option seems fine</strong>. If you just picked the default, you’d have a random walk. But if you have a clear <card-link card=\"g487aed6370_0_81\">north star</card-link>, then you can consistently pick the “right” one, bending you closer and closer to the north-star. This need not be a huge force: just something greater than randomness.</p>\n<p>These decisions compound, meaning that over sufficiently long time horizons you can end up in a very different and much more favorable region, without ever having had a critical <card-link card=\"g487aed6370_0_241\">discontinuity</card-link>.</p>\n<p>One downside is that people not watching closely will erroneously believe that that outcome was inevitable or happened on its own, since <card-link card=\"g487aed6370_0_321\">continuous processes are hard to spot</card-link>. One trick to mitigate that is <card-link href=\"https://twitter.com/mekkaokereke/status/1027552576454021120\">difficulty anchoring</card-link>.</p>\n",
	  "title": "Small decisions can compound even with no discontinuities"
	},
	"g487aed6370_0_236": {
	  "title": "Apply energy as nudging forces, not motive forces",
	  "body": "<p>Making things happen encounters tons of friction, requiring <card-link card=\"g4871092f30_0_1541\">constant input of energy</card-link>. <strong>Motive force </strong>is using your energy to push through that molasses.</p>\n<p><strong>Guiding force</strong>, on the other hand, applies that energy to affect the <em>direction</em><strong><em> </em></strong>of an <card-link card=\"g48a31f22cb_0_45\">agent</card-link> that has their own intrinsic motive force and momentum. They are often called <strong>nudges</strong>.</p>\n<p>Whereas motive force must be continuously applied, guiding force needs to only be applied as needed, and has scale of impact proportional not to the nudge, but to the underlying momentum of the agent.</p>\n<p><strong>The secret to scaling is applying as much of your energy as nudges</strong>. You’ll <card-link card=\"g48845643ff_0_222\">trade off precision for much higher overall impact</card-link>.</p>\n<p>There are often many possible nudges; choose which to apply <card-link card=\"g48845643ff_0_227\">strategically.</card-link></p>\n"
	},
	"g487aed6370_0_241": {
	  "body": "<p>Normal actions are moves to points in the <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link>; they’re incremental. They go from one equilibrium state to another adjacent equilibrium point, often under the internal momentum of the system, or with carefully applied external <card-link card=\"g487aed6370_0_236\">nudges</card-link>.</p>\n<p>Discontinuities often require a <strong>strong external application of force at the same time</strong>. That force is often not sustainable, push the equilibrium beyond its breaking point, or don’t change the underlying dynamics of the system, leading it to <card-link card=\"g487aed6370_0_271\">bounce back when the force is removed</card-link>. It’s nearly impossible to predict how a system pushed past equilibrium will respond; often it simply breaks.</p>\n<p>The number of miracles your plan needs in order to work is a <card-link card=\"g487aed6370_0_161\">count of how many constraints your plan violates</card-link>. Plans that have even a single miracle are highly unlikely; plans that require multiple miracles are nearly impossible. <card-link card=\"g48845643ff_0_544\">Hope is not a strategy</card-link>.</p>\n",
	  "title": "Crossing discontinuities are miracles"
	},
	"g487aed6370_0_246": {
	  "body": "<p>Strategy is the long-term north-star, the why and how. Tactics is the short-term what.</p>\n<p>But in practice problem spaces nest, and what looks like strategy at one layer is tactics for the layer above.</p>\n<p>The way to move, intellectually, up the layer hierarchy is to <card-link card=\"g487aed6370_0_151\">ask why</card-link>.</p>\n",
	  "title": "Strategy vs tactics is a matter of perspective"
	},
	"g487aed6370_0_25": {
	  "body": "<p>The <card-link href=\"https://en.wikipedia.org/wiki/Cynefin_framework\">Cynefin model</card-link> divides problems into four types, each with different properties.</p>\n<ul>\n\t<li><strong>Simple</strong> - Trivial problem spaces that require no special effort.</li>\n\t<li><strong>Complicated</strong> - Knowably hard. Intricate and challenging, but concrete and black and white. Efficiency will require a focus on the right process and structure.</li>\n\t<li><strong>Complex</strong> - <em>Unknowably</em> hard. Goals, methods, and even possible next actions are unclear, meaning <card-link card=\"g487aed6370_0_61\">fundamentally different approaches are required</card-link>.</li>\n\t<li><strong>Chaotic</strong> - So unknowably hard as to be inscrutable--impossible to control or predict. <card-link card=\"g487aed6370_0_30\">Beware diagnosing problems as chaotic</card-link> because it’s effectively giving up.</li>\n</ul>\n<p>Distinguishing between <card-link card=\"g487aed6370_0_45\">complex and complicated</card-link> is the most important in practice.</p>\n<p class=\"small\"><em>Note on terminology: in the past I called what Cynefin calls “complex” “ambiguous”, and what it calls “complicated”, “complex”.  I’ve shifted to use Cynfefin’s terminology consistently.</em></p>\n",
	  "title": "Using the cynefin model to understand problem spaces"
	},
	"g487aed6370_0_251": {
	  "body": "<p>In complex spaces, <card-link card=\"g487aed6370_0_66\">everything is a shade of gray</card-link>. Black and white absolutes simply do not exist.</p>\n<p><strong>Many desirable properties turn out to be in tension in a fundamental trade-off.</strong> Some tensions are obvious (broad vs deep, velocity vs quality). But some are much more subtle (<card-link card=\"g4a9e93532f_0_5\">transparency vs candor</card-link>, messiness vs resilience in ecosystems).</p>\n<p>If you seek black and white answers, you’ll tend to get things out of balance, so you’ll end up flip flopping between two ends of the spectrum, swinging back and forth. This concept is also referred to as polarities.</p>\n<p>If a problem looks like there’s an obvious black-and-white solution, look for the hidden factors it’s in balance with, and ensure you introduce check metrics or otherwise keep them in balance. Even though everything is a balance <card-link card=\"g48845643ff_1_50\">compromise is often a cop out</card-link>.</p>\n",
	  "title": "Everything is a balance"
	},
	"g487aed6370_0_256": {
	  "title": "Simultaneously think about short and long-term",
	  "body": "<p>If you think only about what works in the short-term, it’ll be a <strong><card-link href=\"https://en.wikipedia.org/wiki/Random_walk\">random walk</card-link></strong> through the solution space, and in the long-term you won’t have kicked off any <card-link card=\"g487aed6370_0_20\">compounding value</card-link>.</p>\n<p>If you think only about what works in the long-term, it will be an exercise of <strong>navel-gazing</strong>, and you’ll design solutions that aren’t <card-link card=\"g487aed6370_0_161\">plausible in practice</card-link> because they violate constraints that aren’t yet obvious (because <card-link card=\"g487aed6370_0_66\">the future gets exponentially more fuzzy</card-link>).</p>\n<p>The correct approach in any complex environment is to craft a <card-link card=\"g487aed6370_0_81\">north-star</card-link> and then day-to-day <card-link card=\"g487aed6370_0_261\">focus on solutions that have the wind at your back</card-link> but that the highest <card-link card=\"g48845643ff_0_398\">velocity</card-link> towards the north star. This allows you to focus on learning more while still adding value that is likely to compound. This approach is always the best in complexity.</p>\n<p><em>See also </em><em><card-link card=\"g487aed6370_0_251\">everything is a balance</card-link></em><em></em></p>\n"
	},
	"g487aed6370_0_261": {
	  "body": "<p>That is, the dynamics of the problem space are already driving the outcome generally in a good direction, and all that’s necessary is <card-link card=\"g487aed6370_0_236\">nudges</card-link> to tweak direction. There are a near infinite number of things that you could do in a complex space, and fighting a hurricane force headwind will almost certainly fail.</p>\n<p>Identifying a direction with the wind at your back is often one of the primary hidden constraints. Note that winds are often hard to detect, even when extremely powerful. The wind feels at your back when your ideas don’t <card-link card=\"g487aed6370_0_161\">violate any constraints</card-link>.</p>\n<p>The correct approach often manifests as <strong>solving a problem for which there is clear and concrete short-term demand, that still lines up with the direction you’re trying to do</strong>.</p>\n<p><em>See also the original essay </em><em><card-link href=\"https://medium.com/@komorama/the-energy-of-human-scale-systems-bc5411684563\">The Energy of Human-Scale Systems</card-link></em><em>.</em></p>\n",
	  "title": "Focus on solutions where the wind is at your back"
	},
	"g487aed6370_0_266": {
	  "body": "<p><card-link card=\"g48845643ff_0_265\">Abstract ideas are hard to communicate</card-link></p>\n",
	  "title": "Explain ideas with 70/20/10 mix short/medium/long-term"
	},
	"g487aed6370_0_271": {
	  "body": "<p>When a system is in equilibrium, its internal loops are in balance, and the internal logic of the system can continue under its own momentum and internal intrisic energy. The systems in equilibrium occur naturally often, but <card-link card=\"g48845643ff_0_155\">can’t be created in a lab</card-link>.</p>\n<p>When an external force acts on the system, it may shift, but will <strong>tend to revert back to equilibrium when the force is removed</strong>, unless the external force breaks the loops of the system, creating a <card-link card=\"g487aed6370_0_241\">discontinuity</card-link>, which will then have an unpredictable effect.</p>\n<p>With continued thoughtful nudges, you can evolve an equilibrium continuously.</p>\n<p>Because <card-link card=\"g487aed6370_0_276\">culture can be thought of a systems problem</card-link>, cultures can be extremely difficult to change, and it’s often easier to go along with what that culture is good at and avoid problems it’s bad at--an example of <card-link card=\"g487aed6370_0_261\">keeping the wind at your back</card-link>.</p>\n",
	  "title": "Systems in equilibrium are meta-stable"
	},
	"g487aed6370_0_276": {
	  "title": "Culture can be thought of as an ecosystem",
	  "body": "<p>The systems theory lens can be applied to human-scale systems, especially to the extent the culture is bottoms-up.</p>\n<p>Cultures are the result of inter-related actions by each individual actor interacting with every other actor in the system.</p>\n<p>This leads to an exponentially compounding effect, where even when some subset of individuals try to act under different rules, ultimately the exponential effect dominates.</p>\n<p>This is often called “inter-subjective realities”. They’re fictions that are held in place by the distributed logic and incentives.</p>\n"
	},
	"g487aed6370_0_281": {
	  "title": "In bottoms-up cultures, coordination is impossibly expensive",
	  "body": "<p>The cultures of large teams can be thought of via the systems theory lens.</p>\n<p>In bottoms-up culture, autonomy is prized, and power structures are diffuse and informal.</p>\n"
	},
	"g487aed6370_0_286": {
	  "title": "In complex spaces, don’t cling to ideas that won’t work",
	  "body": "<p>Often complex problems have many interrelated loops and constraints. It can be tempting to <card-link card=\"g48845643ff_1_10\">factor out sub-aspects of the problem to make it more tractable</card-link>. This is a good idea, but often the irreducible core of the problem has a lot of moving pieces, and in practice by default people factor out more of the problem than they should. This is especially true in complex spaces because they often have <card-link card=\"g4a3ed6c576_0_29\">emergent properties</card-link>.</p>\n<p>If you ignore actual constraints in the system, you’ll come up with ideas that sound plausible but actually won’t work. This both wastes time, and requires active energy to get people to move on from the sunk cost.</p>\n<p>The world is a messy place, and there are a number of <card-link card=\"g48845643ff_0_255\">fundamental, powerful, but inconvenient forces</card-link>. Ignoring them, while comforting in the short term, <card-link card=\"g48845643ff_0_270\">is a recipe for frustration and failure</card-link>. A corollary of <card-link card=\"g487aed6370_0_161\">good ideas must fit the constraints</card-link>.</p>\n"
	},
	"g487aed6370_0_291": {
	  "title": "Navigating complex spaces takes time",
	  "body": "<p>Complicated problems require a very small amount of time in the <card-link card=\"g487aed6370_0_5\">discovery phase, and spend most of the time on the performance phase</card-link>. Complex problems require a much higher proportion of time in the discovery phase, sussing out the underlying constraints.</p>\n<p>In practice, <strong>complex problems takes 10x or more time than complicated problems</strong>.</p>\n<p>Almost all problems are <card-link card=\"g487aed6370_0_40\">actually complex</card-link>. If you plan your work assuming the problem space is merely complicated, you’ll undershoot the actual time requirements by an order of magnitude. This mismatch will lead to a constant friction as people are stretched way too thin, and <card-link card=\"g48845643ff_0_464\">finger-pointing and frustration ensue</card-link>.</p>\n"
	},
	"g487aed6370_0_296": {
	  "body": "<p>In a complex space, “fires” (that is, short term emergencies) are a constant fact of life. There’s never a “good time” to focus on fire prevention (taking the long-term approach). Often it <em>feels </em>like after a particular fire is put out you’ll have time--but that’s not true. There will always be more fires to fight, constantly.</p>\n<p>But if you don’t focus on fire prevention--on setting up scalable approaches--then you’ll never unlock the compounding effects of sustainable teams, and you’ll always be fighting fires. Fire-fighting over fire prevention is a form of <card-link card=\"g48845643ff_0_215\">unsustainable heroism</card-link>.</p>\n<p>Put out the most urgent fires, but don’t feel the need to put <em>all </em>of them out--some are OK to let smolder so you can figure out a sustainable approach.  <card-link card=\"g48845643ff_0_469\">Actively </card-link><em><card-link card=\"g48845643ff_0_469\">make</card-link></em><card-link card=\"g48845643ff_0_469\"> time for the necessary long-term thinking</card-link>.</p>\n",
	  "title": "Resist the urge to fight fires; focus on fire prevention"
	},
	"g487aed6370_0_30": {
	  "body": "<p>It’s tempting to diagnose a problem space as <card-link card=\"g487aed6370_0_25\">chaotic</card-link>. But that’s a cheat; it asserts that it’s impossible to ever get clarity on the problem space and you can stop trying.</p>\n<p>Diagnosing the hidden complexities in a problem space takes time, careful study, <card-link card=\"g487aed6370_0_35\">collaborative debate</card-link>, and applying different lenses.</p>\n<p>But often high-level patterns can be deduced in what seemed like a chaotic problem space, and from there you can deduce smaller and smaller insights. Tools like <card-link card=\"g487aed6370_0_10\">systems theory</card-link> are especially valuable for this.</p>\n<p>In an unknowable problem space, default to assuming it’s complex, to help stay motivated to understand it.</p>\n",
	  "title": "Beware diagnosing problem spaces as chaotic"
	},
	"g487aed6370_0_301": {
	  "title": "Over-extending informal leverage points breaks them",
	  "body": "<p>All interactions of humans (and human-created systems) are defined by <card-link card=\"g4871092f30_0_1571\">power differentials</card-link> and leverage points.</p>\n<p>Some leverage points are formally expressed in structures like laws or formal reporting structures. But many leverage points are informal or situational, sometimes referred to “informal authority” or “<card-link card=\"g48845643ff_0_311\">credibility</card-link>.”</p>\n<p>If you try to apply too much informal-authority-derived leverage at a point, it sometimes will not work--and the fact that everyone sees that you didn’t have that leverage erodes the leverage it was based on; if it succeeds, it can create more leverage.</p>\n<p>The space of the <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> is thus defined, at least partially, by how much leverage of different types can be successfully applied without breaking. See also <card-link card=\"g48845643ff_0_306\">earning credibility means putting some on the line</card-link>.</p>\n"
	},
	"g487aed6370_0_306": {
	  "title": "Mis-applied structure actively obfuscates",
	  "body": "<p>Structure here means process, frameworks, and plans. Structure is a great tool to help reduce complexity to mere complication. However, humans crave clarity and detail, which means we tend to <strong>apply structure too early</strong>.</p>\n<p>A structure that doesn’t actually “capture” or “explain” the underlying power structures and problem space is an active headwind, because it obscures what is actually happening. It’s similar to <card-link href=\"http://wiki.c2.com/?PrematureOptimization\">premature optimization</card-link>.</p>\n<p>Misapplied structure incorrectly implies a space is merely a complicated one, configured in a particular (wrong) way. This creates a headwind that must be actively overcome to get good things to happen, because people must overcome the inertia of the structure to figure out how it actually works.</p>\n<p>A corollary is to <card-link card=\"g4871092f30_0_1536\">apply process only retroactively</card-link>.</p>\n"
	},
	"g487aed6370_0_311": {
	  "body": "<p><card-link card=\"g487aed6370_0_241\">Discontinuities</card-link> happen all of the time, but their outcome is nearly impossible to predict.</p>\n<p>There is an extremely strong <card-link href=\"https://en.wikipedia.org/wiki/Survivorship_bias\">survivorship bias</card-link>; an organization that got lucky and randomly benefited from a discontinuity, will, knowing they succeeded, be able to retroactively rationalize (or “<card-link href=\"https://en.wikipedia.org/wiki/Retroactive_continuity\">retcon</card-link>”) the insights that led them to make it through that filter event. The illusion is caused by the same dynamic that underlies the <card-link href=\"https://en.wikipedia.org/wiki/Monty_Hall_problem\">Monty Hall problem</card-link>.</p>\n<p>This retcon will often come to be taken as an immovable founding myth that will become actively dangerous in new situations, and in general makes the organization have an <strong>unwarrantedly high estimation of its ability to tackle new and different problems</strong>. This is one of the reasons Silicon Valley has toxic <card-link card=\"g48845643ff_0_413\">hero worship</card-link>.</p>\n",
	  "title": "Miracles in retrospect incorrectly look intentional"
	},
	"g487aed6370_0_321": {
	  "title": "Continuous processes are hard to spot",
	  "body": "<p>Continuous processes can lead to extremely strong <card-link card=\"g487aed6370_0_15\">compounding effects</card-link> that can overwhelm just about any other force in a system.</p>\n<p>But unlike <card-link card=\"g487aed6370_0_241\">discontinuities</card-link> which are discrete and obvious, continuous effects are smooth and incremental as the system morphs between adjacent equilibrium states.</p>\n<p>Human brains are percentage-of-change detectors, which means our brains are constantly re-calibrating. That means continuous processes don’t “look like much” in the day to day. It’s only over long time horizons that they become obvious.</p>\n<p>This is one of the reasons that a compounding ecosystem effect can often take competitors by surprise--it doesn’t look like much in absolute terms, until it’s too late to catch up.</p>\n"
	},
	"g487aed6370_0_326": {
	  "body": "<p>Corollary of minimize discontinuities.</p>\n<p>If an idea needs 5 different groups to independently prioritize a thing, and it’s only successful if all of them succeed, it won’t happen in a complex enviornment.</p>\n<p>(Game theory trap)</p>\n",
	  "title": "MInimize number of changes necessary to succeed"
	},
	"g487aed6370_0_331": {
	  "body": "<p>If there are compounding or continuous processes that will lead to a gradual decline to a thing that, from a distance, is obviously a bad outcome, you need a special approach.</p>\n<p>Because <card-link card=\"g487aed6370_0_321\">continuous processes are hard to spot</card-link>, there will be no discontinuity that obviously calls for a breaking point (e.g. a massive protest in a democracy). This is one of the mechanisms that helps lead to the rise of dictatorships.</p>\n<p>The trick is to <em>create </em>an artificial breaking point well ahead of time. Identify the conditions that are obviously egregious if they were to happen in the long-term, and describe the action that you will take.</p>\n<p>Make that plan widely known, and revisit it often as the process continues, treating it as an immovable object and imbuing it with leverage. <card-link href=\"https://en.wikipedia.org/wiki/Doomsday_Clock\">The Doomsday Clock</card-link> is an example of this approach in practice. Set <card-link card=\"g48845643ff_0_514\">kill and success criteria early</card-link> is an application of this.</p>\n",
	  "title": "Slippery slope processes require creating a discontinuity"
	},
	"g487aed6370_0_35": {
	  "title": "Collaborative debate is the best tool in complex spaces",
	  "body": "<p>Adversarial debate is more familiar, but it presumes that the answer is one of two options. That only applies in complicated problem spaces, not complex.</p>\n<p>The fundamental difference with collaborative debate is a <strong>positive-sum </strong>perspective. All participants must be <card-link card=\"g487aed6370_0_141\">curious</card-link>, keep an open mind, and seek to understand. The debate should be <card-link card=\"g487aed6370_0_171\">intellectually but not emotionally intense</card-link>.</p>\n<p>No single person has the right skill sets, experiences, and perspectives to fully understand a complex problem space. Diversity of perspective (both underlying data and <card-link card=\"g487aed6370_0_111\">lenses</card-link>) is the raw material for comprehensive <card-link card=\"g487aed6370_0_50\">insight</card-link>.</p>\n<p><strong>The conditions for collaborative debate are not natural occurring and must be </strong><strong><card-link card=\"g487aed6370_0_166\">actively created</card-link></strong><em>. See also the essay </em><em><card-link href=\"https://medium.com/@komorama/debate-should-be-collaborative-not-combative-185ff37f1d34\">Debate should be collaborative, not combative</card-link></em><em>.</em></p>\n"
	},
	"g487aed6370_0_40": {
	  "title": "Everything is complex",
	  "body": "<p>Distinguishing a <card-link card=\"g487aed6370_0_45\">complex versus complicated</card-link> problem space is a key skill. Assume every problem space is complex until proven otherwise, especially because <card-link card=\"g487aed6370_0_96\">problems that involve humans are inherently complex</card-link>.</p>\n<p>Almost every problem space is actually inter-connected into one universe-sized problem space. When tackling a problem we decide where the bounds of the problem we have to consider are, in order to make it easier to tackle. In <card-link card=\"g487aed6370_0_10\">systems theory</card-link>, for example, this is where we decide to model the inputs/outputs in the system.</p>\n<p>As you understand a problem space, it reduces from complex to complicated as you learn what factors are extraneous to the problem at hand. But note that even a seemingly complicated problem space can <strong>become complex as conditions change, or as your goal becomes more nuanced</strong>, requiring a new approach.</p>\n"
	},
	"g487aed6370_0_45": {
	  "title": "Complex vs complicated problem spaces",
	  "body": "<p>In large organizations, two of the most common quadrants in the <card-link card=\"g487aed6370_0_25\">Cynefin mode</card-link>l are complex vs complicated. Complexity is, unit for unit, a couple of orders of magnitude more expensive to deal with than complication. Complex spaces require <card-link card=\"g487aed6370_0_61\">fundamentally different approaches</card-link> because they <card-link card=\"g4a9e93532f_0_10\">cannot be easily reduced to smaller problems</card-link>.</p>\n<p>Complicated problem spaces are hard, but knowably so. They require efficiency, careful structuring of the problem, and solid coordination to execute well. Think of them like a labyrinth--lots of branches and booby traps, but fundamentally mappable.</p>\n<p>Complex problem spaces are unknowably hard; the next steps, constraints, and even end goals often aren’t clear. New approaches are required. Think of complexity like a dense fog. Complexity is commonly referred to as ambiguity.</p>\n<p><card-link card=\"g487aed6370_0_50\">Insights are the way to reduce a complex problem to a merely complicated one.</card-link></p>\n"
	},
	"g487aed6370_0_5": {
	  "body": "<p>Also known as divergent and convergent phases. The latter is also known as socializing.</p>\n<p>In a complex problem space, you need to dig into problems and look at them from many angles. As you have a nugget of an idea that develops, you need to share it with ever-widening groups of people to communicate your plan and, sometimes, get approval to pursue it.</p>\n<p>At all points you should be actively looking for disconfirming evidence of insights, and incorporate them continuously to improve your plan, although that willingness should decline as the project proceeds, since <card-link card=\"g48a31f22cb_0_15\">bad ideas look good from a distance</card-link>.</p>\n<p>In discovery phase, aim for <card-link card=\"g487aed6370_0_35\">collaborative debate</card-link>, keeping the set of people as small as you can while still having a spanning set of the relevant expertise. In the performance phase, <card-link card=\"g48a31f22cb_0_10\">minimize discontinuities</card-link> as you socialize more broadly.</p>\n",
	  "title": "Discovery vs Performance Phase"
	},
	"g487aed6370_0_50": {
	  "body": "<p>An <strong>insight is a clarifying observation that distills some amount of intractable complexity to the more tractable complication</strong>.</p>\n<p>Insights are <strong><card-link card=\"c-738-afa781\">naturally viral</card-link></strong>--they have a satisfying “aha!” moment and people often want to share them. They feel discovered rather than created. If the idea is not spreading, then it’s likely not a true insight.</p>\n<p>Insights <card-link card=\"c-113-cba734\">seem obvious--but only in retrospect</card-link>.</p>\n<p><card-link card=\"g487aed6370_0_111\">Lenses are tools that can be used to mine insights</card-link>. There are no one-size-fits-all approaches; generating insights fundamentally requires <card-link card=\"g487aed6370_0_106\">critical thinking</card-link> and <card-link card=\"g487aed6370_0_141\">curiosity</card-link>.</p>\n<p><em>See also </em><em><card-link href=\"https://medium.com/@komorama/insights-distill-ambiguity-to-complexity-28951000ef72\">the original essay</card-link></em><em></em></p>\n",
	  "title": "Insights distill complexity to mere complication"
	},
	"g487aed6370_0_55": {
	  "title": "Humans are biased away from complex problem spaces",
	  "body": "<p>Complicated problem-spaces are familiar, sharp, and comfortingly concrete. Complex problem spaces are foreign, fuzzy, and disturbingly abstract.</p>\n<p>In addition, complex problem spaces take much longer to analyze and understand, and in day-to-day operations there are often many fires to fight.</p>\n<p>People have a natural bias towards the “easier” framing, so it’s critical to always <card-link card=\"g487aed6370_0_40\">assume that a problem space is complex</card-link> until proven otherwise, especially because <card-link card=\"g487aed6370_0_40\">more problem spaces are complex</card-link> than people realize.</p>\n"
	},
	"g487aed6370_0_61": {
	  "body": "<p><card-link card=\"g487aed6370_0_55\">Humans are biased away from complex problem spaces.</card-link> But correctly diagnosing a problem space as complex is only the first step.</p>\n<p>In complex problem spaces, you <strong>have to let go of the </strong><strong><card-link card=\"g487aed6370_0_76\">details that don’t matter</card-link></strong>, because they’re <card-link card=\"g487aed6370_0_71\">a dangerous illusion</card-link>. Doing this is hard, unnatural, and a little scary. But it’s the only way to see broader truths.</p>\n<p>You have to l<strong>et go of ever having solutions that are </strong><strong><em>both</em></strong><strong> detailed and clear.</strong> You can have one but not the other (and generally only the latter). When you let go, you can become <strong>cosmically calm</strong>, and high-level truths will become evident.</p>\n<p>Certain types of solutions are fundamentally impossible in complexity, although people who are uncomfortable with complexity will continue to demand them.</p>\n",
	  "title": "Embracing complexity means letting go of details"
	},
	"g487aed6370_0_66": {
	  "title": "Nothing is black and white in complex problem spaces",
	  "body": "<p>In <em>simple</em> or <em>complicated</em> problem spaces, many things are black and white (either trivially, or intricately, respectively). But in complex problem spaces, <strong>everything is a shade of gray </strong>(albeit sometimes perhaps a very, <em>very</em> dark or light shade).</p>\n<p>Resist trying to make facts black and white, because you will lose the nuance necessary to come to the correct solutions, and those reductions can give the <card-link card=\"g487aed6370_0_71\">illusion of clarity</card-link>.</p>\n<p>Instead of thinking in terms of binary true or false outcomes, think in terms of <strong>probability distributions</strong>, and <strong>Expected Value (EV)</strong> on top of those distributions.</p>\n<p>This is especially true as you try to predict forward in time, as <card-link card=\"g48845643ff_0_121\">things get exponentially less clear over time</card-link>.</p>\n"
	},
	"g487aed6370_0_71": {
	  "body": "<p>We’re <card-link card=\"g487aed6370_0_55\">biased</card-link> towards things that are black-and-white and concrete. But <card-link card=\"g487aed6370_0_66\">in complex spaces, everything is gray</card-link>. Pretending otherwise is a comforting but dangerous lie.</p>\n<p>In complex spaces, <strong>details are noise</strong>: insignificant and distracting, just like too many significant digits would be. Only by letting go of them can you see the abstract but clarifying large-scale patterns that help you make powerful predictions.</p>\n<p>In complex spaces, detail is:</p>\n<ul>\n\t<li><strong><span class=\"small\">Expensive to generate</span></strong><span class=\"small\"> For the same reasons as </span><span class=\"small\"><card-link href=\"https://www.owenstephens.co.uk/blog/2014/09/28/NFA_DFA.html\">exponential blow-up in converting from an NFA to DFA</card-link></span><span class=\"small\"></span></li>\n\t<li><strong><span class=\"small\">Almost certainly wrong</span></strong><span class=\"small\"> Because it relies on assigning arbitrary values to unknown details</span></li>\n\t<li><strong><span class=\"small\">Distracting</span></strong><span class=\"small\"> Because of the extraordinary opportunity cost, given its high expense</span></li>\n\t<li><strong><span class=\"small\">Dangerous</span></strong><span class=\"small\"> Because the illusion of clarity it provides will prevent you from changing course as you learn more, especially given the sunk cost on it, requiring lots of energy to break free of</span></li>\n</ul>\n",
	  "title": "In complex spaces, detail is a dangerous illusion"
	},
	"g487aed6370_0_76": {
	  "body": "<p>In complex problem spaces, <card-link card=\"g487aed6370_0_71\">detail is a dangerous illusion</card-link>.</p>\n<p>Instead of focusing on a detailed solution that is expensive, distracting, and almost certainly wrong, <strong>focus on direction</strong>.</p>\n<p>Once you know your <card-link card=\"g487aed6370_0_81\">north star</card-link>, ask yourself, for a given question before us, <strong>would the direction of my next action change depending on what the answer turns out to be</strong>? If the answer is no (or would be a miniscule directional change), don’t worry about answering it because it doesn’t matter. In fact, <card-link card=\"g487aed6370_0_86\">keeping the question open can be useful</card-link>.</p>\n<p>Often the exact detail is unknowable, but all that matters is <strong><card-link card=\"c-514-dec727\">order of magnitude</card-link></strong> of various outcomes, which is much easier to estimate (probabilistically, at least) using <card-link card=\"g487aed6370_0_116\">various abstract lenses</card-link>.</p>\n",
	  "title": "Focus on direction, not solution, in complex problem spaces"
	},
	"g487aed6370_0_81": {
	  "title": "Use north stars in complex spaces",
	  "body": "<p>In complex spaces, you <card-link card=\"g487aed6370_0_76\">focus on direction, not solutions</card-link>, because so many of the constraints are not yet known. North stars are the ideal that you sight off of to give you the direction you should be headed.</p>\n<p>North stars must be sufficiently far in the the future (at least 3 years), otherwise the arbitrary constraints of today will dominate the analysis. The right level of detail is roughly two pages of content, with no team names or pictures. North stars may shift as you learn more, with your day-to-day execution curving in the new direction.</p>\n<p><strong>North stars must be both comprehensively plausible and desirable</strong>. Plausible means that they <card-link card=\"g487aed6370_0_161\">don’t violate </card-link><em><card-link card=\"g487aed6370_0_161\">any</card-link></em><card-link card=\"g487aed6370_0_161\"> constraints</card-link> (even ones that aren’t yet known to the team).</p>\n<p>North stars, combined with executing in directions with the <card-link card=\"g487aed6370_0_261\">wind at your back</card-link>, are the <card-link card=\"g487aed6370_0_256\">correct way to navigate complex spaces</card-link>.</p>\n"
	},
	"g487aed6370_0_86": {
	  "body": "<p>In complex spaces, you need to <card-link card=\"g487aed6370_0_76\">focus on direction, as opposed to solution</card-link>. You can think of the lingering ambiguity being in a superposition of possible final states according to some probability distribution.</p>\n<p>Every detail that you “lock in” is an ambiguity that has been definitively decided--collapsing the quantum state into a particular outcome that is likely wrong.</p>\n<p><strong>But in complex spaces, flexibility and maneuvering room can be extremely useful</strong>, as you learn more and get more clarity on the problem space. For example, they make building rough consensus easier, which can then be tightened and improved.</p>\n<p>People like detail and clarity so will want to collapse things earlier than you should. If you don’t need that detail to clarify something in the short-term, don’t collapse it.</p>\n",
	  "title": "In complex spaces, avoid collapsing the wave function early"
	},
	"g487aed6370_0_91": {
	  "body": "<p>Because <card-link card=\"g487aed6370_0_66\">complex spaces are fundamentally gray</card-link>, and <card-link card=\"g487aed6370_0_101\">politics is a fact of life</card-link>, it’s dangerously easy to slide down a slippery slope of moral relativism where any means can be justified.</p>\n<p>That is extremely dangerous, and when allowed to infect a team culture, can create an unrecoverable toxic spiral.</p>\n<p>It is important to follow the moral north star to <strong>always do the right thing, from the broadest possible perspective</strong>. In fact, <card-link card=\"c-270-aeb148\">doing good things is actively good morally</card-link>.</p>\n<p>Be aware of your own bias towards outcomes that are favorable to you and your team; actively force yourself to consider problems from a <card-link card=\"g4871092f30_0_1561\">positive-sum mindset</card-link>, as close to the <card-link href=\"https://en.wikipedia.org/wiki/Veil_of_ignorance\">veil of ignorance ideal</card-link> as possible. You must <card-link card=\"c-780-aea060\"><em>actively </em>seek out evidence that your perspective is flawed or incomplete</card-link>, and <card-link card=\"48ac50\">dig in any time you are surprised</card-link>, lest you get lulled into a false sense of understanding as the context changes or new information is unearthed.</p>\n",
	  "title": "Have a moral compass in complex spaces"
	},
	"g487aed6370_0_96": {
	  "body": "<p><card-link card=\"g487aed6370_0_40\">All problems are complex</card-link>, but that is even more true for problems involving humans because human interactions are nuanced, highly motivated, and highly inter-related.</p>\n<p>Even if the underlying problem is merely complicated, if there’s a problem to get a large group of informally-organized humans to pull in the right direction, it’s a complex problem overall.</p>\n<p>This is because <card-link card=\"g4871092f30_0_1571\">power differentials exist everywhere</card-link>, humans all have emotions, and <card-link card=\"g487aed6370_0_101\">politics is emotion at scale</card-link>. This is especially true in <card-link card=\"g48a31f22cb_0_55\">bottoms-up cultures</card-link>, where the power structures are often <card-link card=\"g48845643ff_0_311\">informal</card-link>, or in any condition where the formal power structures do not match the underlying power dynamics well.</p>\n",
	  "title": "Human problems are all complex"
	},
	"g48845643ff_0_100": {
	  "body": "<p>For example, I want to read analysis and arguments from people I disagree with to enhance my own understanding of the world. But in practice I gravitate towards reading articles that already agree with my world view.</p>\n<p>As another example, you might want to eat healthily and exercise, but in practice gravitate towards eating multiple desserts at a party.</p>\n<p>See also the importance of <card-link card=\"g48845643ff_0_95\">aligning short- and long-term incentives</card-link></p>\n<p>As well as in the <card-link card=\"g4871092f30_0_1526\">distance people see problems more abstractly</card-link>.</p>\n",
	  "title": "What humans want to want is different than what they want"
	},
	"g48845643ff_0_105": {
	  "body": "<p><card-link card=\"g4a3ed6c576_4_5\">Complex systems need more maneuvering room</card-link>.</p>\n<p>Don’t formalize things too early. When you do, deliberately leave a little more wiggle room than you think you need. As you operationalize a problem space you’ll learn how things actually play out in practice. You want to have the constraints capture the 95th percentile within the bounds, but be as tight as you can be other than that.</p>\n<p>Formalizing the <card-link card=\"g487aed6370_0_306\">wrong structure can be expensive</card-link>, and systems with too much structure can have high efficiency but <card-link card=\"g4a3ed6c576_4_0\">low resiliency</card-link>.</p>\n<p>A version of <card-link card=\"g48845643ff_0_90\">always rules are better than sometimes rules</card-link>.</p>\n",
	  "title": "Start with loose structure and tighten as you learn more"
	},
	"g48845643ff_0_111": {
	  "title": "The self-sustaining flame",
	  "body": "<p>A metaphor for capturing the key insight of ecosystems: finding the feedback loop</p>\n<p>Finding that feedback loop is the most important thing, but the actions we can take to kick-start an ecosystem (Business Development deals, marketing, etc) are external forces that obscure whether the internal forces have “caught”.</p>\n<p>The best bet is to find a working loop, however small, and then evolve and grow that continuously.</p>\n<p>See also respond to concrete demand and the <card-link card=\"g48845643ff_0_116\">myth of infrastructure</card-link>.</p>\n<p><em>See also the original essay: </em><em><card-link href=\"https://medium.com/@komorama/the-self-sustaining-flame-84326d2e1645\">The self-sustaining flame</card-link></em><em></em></p>\n"
	},
	"g48845643ff_0_121": {
	  "title": "Things get exponentially harder to predict over time",
	  "body": "<p>If you have an inter-related problem space, then the state of the system at time n relies on the state of the system at time (n - 1), and so on back to the current time.</p>\n<p>This has a mathematically compounding effect, making the future, even one in a relatively simple system, get <strong>exponentially less clear over time</strong>.</p>\n<p>Complex problem spaces often <em><card-link card=\"g487aed6370_0_66\">start </card-link></em><card-link card=\"g487aed6370_0_66\">with more gray</card-link> and have a more strongly inter-related dynamic, which means that in these systems precise detail in the future is often fundamentally unknowable.</p>\n<p>However, if you understand the large-scale patterns and forces in your system, you can still make probabilistic predictions of large-scale outcomes that are still true. It would be a <card-link card=\"g487aed6370_0_30\">mistake to categorize any problem that requires forecasting as chaotic</card-link>.</p>\n"
	},
	"g48845643ff_0_126": {
	  "title": "Similar systems dynamics exist in all human-scale systems",
	  "body": "<ul>\n\t<li>Individual motivation</li>\n\t<li>Teams</li>\n\t<li>Ecosystems</li>\n</ul>\n<p>See also Systems theory is a powerful lens</p>\n"
	},
	"g48845643ff_0_132": {
	  "body": "<p>Individuals, teams, and ecosystems have intrisinc energy--energy that arises naturally from within the system without an external force.</p>\n<p>This energy can be harnessed to do useful work, like <card-link card=\"g48845643ff_0_443\">searching your adjacent possible</card-link> and prioritizing ideas.</p>\n<p>Where they’re more motivated (as in a successful developer ecosystem), there’s even more energy to harness.</p>\n",
	  "title": "Harness human systems’ intrinsic energy"
	},
	"g48845643ff_0_138": {
	  "title": "Focus on problems that give you energy",
	  "body": "<p>Individuals have <card-link card=\"g48845643ff_0_132\">intrinsic energy that can be harnessed</card-link>.</p>\n<p>Individuals’ intrinsic energy is the drive to succeed</p>\n<p>Finding your passion, your highest and best use</p>\n<p>Optimizing your amount of time in your flow state</p>\n<p>When in flow state, individuals <em>get </em>energy, not just spend it. This means harnessing it can be a powerful source of unlimited energy.</p>\n<p>Managers’ job is to maximize the amount of time their reports are in their flow state.</p>\n"
	},
	"g48845643ff_0_144": {
	  "body": "<p>Ecosystems have i<card-link card=\"g48845643ff_0_132\">ntrinsic energy that can be harnessed</card-link>.</p>\n<p>Ecosystems intrinsic energy comes from the sum total of all incentives of actors within the system, as well as those incentive structures playing off one another.</p>\n<p>Even if the underlying incentives are partially in tension they can still do useful work in aggregate.</p>\n<p>Democracy and capitalism harness this energy, for example</p>\n<p>Incentives are a form of <card-link card=\"c-540-bfb542\">gradient</card-link> (albeit ones that are highly interdependent among agents), and <card-link card=\"c-857-bfd577\">all useful work comes from descending gradients</card-link>.</p>\n",
	  "title": "Ecosystems’ intrinsic energy comes from incentives"
	},
	"g48845643ff_0_155": {
	  "title": "It’s not possible to create a thriving engine in a lab",
	  "body": "<p>Thriving engines are systems that are in equilibrium with a source of sustainable intrinsic energy combined with calibrated feedback loops, in careful balance.</p>\n<p>Most possible configurations will fail to start or collapse on themselves. It’s basically impossible to create one in a lab, like finding a needle in a haystack.</p>\n<p>It’s much better to find one that already exists in the wild and then continuously evolve and grow it into something stronger. That is, <strong>systems in balance should be discovered, not created</strong>.</p>\n<p>Once you have one, it’s way easier to study it to figure out how it works than to have created it from thin air. See also the <card-link card=\"g48845643ff_0_111\">self-sustaining flame</card-link> metaphor.</p>\n"
	},
	"g48845643ff_0_161": {
	  "body": "<p>Energy has to come from somewhere; if you need to inject it into a system to keep it on track to counter the intrinsic energy of a system, it will fail.</p>\n",
	  "title": "Extrinsic energy is unsustainable"
	},
	"g48845643ff_0_167": {
	  "title": "Feedback loops create compounding effects",
	  "body": "<p>Feedback loops are the magic behind successful ecosystems. They take a source of sustainable intrinsic energy and multiply it at compounding rates to reach astronomical heights.</p>\n<p>You can tell you have one if <card-link card=\"g48845643ff_0_173\">you see an accelerating curve</card-link>. And <card-link card=\"c-570-ecd342\">compounding effects can have exponential growth</card-link>, which is <card-link card=\"c-835-eed111\">mind-blowingly fast</card-link>.</p>\n<p>Because they are<card-link card=\"g487aed6370_0_321\"> continuous processes, they’re hard to spot</card-link>, and competitors often won’t spot them until it’s too late.</p>\n"
	},
	"g48845643ff_0_173": {
	  "body": "<p>If you see any success metric <strong>whose second-order derivative is positive</strong>, you’ve caught some kind of feedback loop.</p>\n<p>Now you can carefully study to understand how it works. <card-link card=\"g487aed6370_0_10\">Systems theory</card-link> and <card-link card=\"g4a3ed6c576_0_19\">simulation</card-link> are two powerful lenses for understanding the core dynamics of a loop.</p>\n<p>Once you understand how it works (the <card-link card=\"g48845643ff_0_191\">enablers</card-link>), you can figure out the <card-link card=\"g4a41d8c468_1_0\">accelerants</card-link> that can evolve it to go even faster.</p>\n",
	  "title": "The tell of a compounding loop is an accelerating curve"
	},
	"g48845643ff_0_185": {
	  "body": "<p>One of the best way to tackle complex problem spaces is to pattern match--to be able to see large-scale patterns, and have a large library of patterns to martch against.</p>\n<p>This means that people who have this skill can get exponentially more effective over time.</p>\n",
	  "title": "Accumulated experience is the compounding loop for people"
	},
	"g48845643ff_0_191": {
	  "title": "Ecosystems have enablers and accelerants",
	  "body": "<p>The fundamental enabler of an ecosystem is a compounding loop.</p>\n<p>Once you find a successful compounding effect, there are a number of ways to make it run hotter via accelerants.</p>\n<p>But no matter how many accelerants you have, if you don’t have a core enabler then you have nothing.</p>\n<p>The hard part is finding a loop that fundamentally works.</p>\n<p>There are a number of different <card-link card=\"g4a41d8c468_1_0\">accelerants</card-link> you can use.</p>\n"
	},
	"g48845643ff_0_198": {
	  "body": "<p>Ecosystem engines are some of the most powerful systems in the world</p>\n",
	  "title": "Engines combine intrinsic energy with a compounding effect"
	},
	"g48845643ff_0_204": {
	  "title": "A successful engine changes the incentives around it",
	  "body": "<p>This means that a successful ecosystem engine can start off with most entities not wanting to participate, but as it runs hotter it attracts more energy, which makes it more powerful, which attracts even more energy.</p>\n<p>This means that even agents who were strongly incentivized against participating at the beginning might, over time, become more incentivized to participate. This will generally ripple up from the long-tail towards the head of established players, and will take a very long time (if ever) to affect the <card-link card=\"g4a41d8c468_1_62\">very top players</card-link>.</p>\n<p>This also means that analyzing an ecosystem requires an <card-link card=\"g48845643ff_0_209\">analysis over time, not just at a snapshot</card-link>.</p>\n<p>The lens of <card-link card=\"g4a3ed6c576_0_14\">game theory</card-link> can help elucidate these compounding effects.</p>\n<p>Akin to a <card-link href=\"https://en.wikipedia.org/wiki/Gravity_well\" style=\"font-size: 16.1831px;\">gravity well</card-link> in astrophysics. A <card-link card=\"c-874-abf689\">gravity well</card-link> in this context is a strong instance of this.</p>\n"
	},
	"g48845643ff_0_209": {
	  "title": "Analyzing an engine requires seeing trends over time",
	  "body": "<p>Anything with a compounding loop has <strong>dynamics that will change over time</strong>. This means analyzing a static snapshot of a system can lead to very wrong conclusions, because they miss the important <card-link card=\"g4a3ed6c576_8_0\">compounding effects</card-link>.</p>\n<p>You must analyze the system to understand where non-linearities exist, and most critically, understand where feedback loops will activate, since those can dominate all other factors in a system.</p>\n<p>Humans are very good at intuitively understanding 2D graphs, but it’s hard to visualize 2D graphs changing over time, and videos are harder to produce and take longer to watch.</p>\n<p>This is one of the reasons that <card-link card=\"g487aed6370_0_321\">continuous effects--even compounding ones--are often hard to spot</card-link>.</p>\n"
	},
	"g48845643ff_0_215": {
	  "body": "<p>Heroism is celebrated in the tech industry</p>\n<p>It often <em>is </em>the right approach, but only in the short-term. In the long-term it prevents more sustainble, compounding effects from taking hold, e.g. sustainable team structure with clear leadership.</p>\n<p>It’s especially unreasonable when you counter your linear force against a thriving engine</p>\n",
	  "title": "Heroism is a form of unsustainable extrinsic energy"
	},
	"g48845643ff_0_222": {
	  "title": "Scaling requires letting go of the details",
	  "body": "<p><card-link card=\"g487aed6370_0_236\">Nudges</card-link> are much more sustainable, but require you to focus not on precise outcomes, but rather that the system will get to a <em>region </em>of good outcomes</p>\n"
	},
	"g48845643ff_0_227": {
	  "body": "<p><card-link card=\"g487aed6370_0_236\">Nudges are the best way to scale</card-link>, but there are nearly infinite nudges you could do.</p>\n<p>Nudges get more expensive the <strong>farther from your cone of influence they are</strong>, and the <strong>less they align with the existing momentum</strong> of the system you’re nudging. Also be careful that nudges from farther afield are more likely to be <card-link card=\"g48845643ff_0_244\">strongly resisted</card-link>.</p>\n<p>The main question is <strong>“if this system continues on its current trajectory, will it converge to a good-enough solution in a reasonable time-frame with acceptable efficiency?”</strong></p>\n<p>Apply nudges where things aren’t converging and the bang-for-buck per unit energy is high.</p>\n",
	  "title": "Apply nudges where things aren’t converging"
	},
	"g48845643ff_0_234": {
	  "title": "Be as patient as your runway allows",
	  "body": "<p>A long-term perspective helps find sustainable approaches to problems--it’s the only way to spot potential <card-link card=\"g487aed6370_0_20\">compounding effects of infrastructure</card-link> or <card-link card=\"g487aed6370_0_236\">nudges</card-link>.</p>\n<p>If you have 3 months left, planning a five year vision is folly. But if you know you’ll be around in 5 years, you can do <card-link card=\"g487aed6370_0_236\">nudges</card-link> that will compound and lead to 100x or 1000x outcomes with <em>relatively </em>little work. <strong>You should take as long-term a perspective as your runway allows.</strong></p>\n<p>Remember to <card-link card=\"g48a31f22cb_0_50\">minimize the time to adding value</card-link> to ensure you aren’t chasing an idea that won’t work--this advice is primarily to allow you to spot compounding effects early.</p>\n<p>Remember that your runway includes funding but <card-link card=\"g48845643ff_0_239\">also things like political capital</card-link>.</p>\n<p>The <card-link card=\"c-663-faa399\">length of your runway</card-link> is one of the primary determinants for how you should allocate your time.</p>\n"
	},
	"g48845643ff_0_239": {
	  "title": "Runways are not just about funding",
	  "body": "<p>If you’re a start up, your <card-link card=\"g48845643ff_0_234\">runway</card-link> is literally how long your current funding</p>\n<p>But the notion of a runway also extends to things like your teams’ <card-link card=\"g48845643ff_0_311\">political capital</card-link> within a large organization. How much real-world value is your team adding, compared to your current carrying cost (head count)?</p>\n"
	},
	"g48845643ff_0_244": {
	  "title": "Systems will resist obvious external forces",
	  "body": "<p>Often if your <card-link card=\"g487aed6370_0_236\">nudge</card-link> is obvious, <card-link card=\"g487aed6370_0_301\">overplays its hand</card-link>, or is perceived as stop energy, the system will react by routing around you, perhaps even accelerating now that they have a shared enemy.</p>\n"
	},
	"g48845643ff_0_25": {
	  "title": "Open systems create gravity wells",
	  "body": "<p><card-link card=\"g48845643ff_0_204\">Gravity wells</card-link></p>\n"
	},
	"g48845643ff_0_250": {
	  "body": "<p><card-link href=\"https://en.wikipedia.org/wiki/Goodhart%27s_law\">Goodhart’s law</card-link> is one of the <card-link card=\"g48845643ff_0_255\">fundamental gravitational forces</card-link>. It states that “<strong>When a measure becomes a target, it ceases to be a good measure</strong>”.</p>\n<p>The core insight is that every conceivable metric has only some correlation with the deeper thing you care about. Humans are clever and will <card-link card=\"g48845643ff_0_443\">seek ideas in the adjacent possible that you didn’t intend</card-link>, especially if incentivized. Over time, as they find more clever loopholes, the correlation of the metric with what you care about will decline.</p>\n<p>Target metrics are a way of structuring a problem to reduce it to mere complication, <card-link card=\"g487aed6370_0_121\">but no structure should ever replace thinking</card-link>. The fix for Goodhart’s law is to always keep in mind the higher-level <card-link card=\"g487aed6370_0_156\">end</card-link> you’re trying to achieve, and critically analyze whether the current outcomes are aligned with it. A simple but imperfect mitigation is a <card-link href=\"https://medium.com/@gokulrajaram/the-second-most-important-metric-for-every-company-df958ff8c5ec\">check metric</card-link>, which helps defend against the most obvious loopholes.</p>\n",
	  "title": "Goodhart’s Law"
	},
	"g48845643ff_0_255": {
	  "title": "Fundamental gravitational forces",
	  "body": "<p>There are some forces that are constants in human-scale systems, and you should assume they’re operative in your space. <card-link card=\"g48845643ff_0_270\">Ignoring them is a mistake</card-link>.</p>\n<ul>\n\t<li><card-link card=\"g48845643ff_0_250\">Goodhart’s law</card-link></li>\n\t<li><card-link card=\"g487aed6370_0_101\">Politics is emotion at scale</card-link></li>\n\t<li><card-link card=\"g487aed6370_0_176\">Us-vs-them</card-link></li>\n\t<li><card-link card=\"g48845643ff_0_255\">Progress requires a constant influx of energy</card-link></li>\n\t<li><card-link card=\"g48845643ff_0_265\">Abstract ideas are harder to communicate at scale</card-link></li>\n\t<li><card-link card=\"g48845643ff_0_215\">Heroics are unsustainable and will fail at some point</card-link></li>\n</ul>\n"
	},
	"g48845643ff_0_260": {
	  "title": "Progress requires a constant influx of energy",
	  "body": "<p>Making things <em>happen </em>requires pushing through <card-link card=\"g4871092f30_0_1541\">friction</card-link> of all types in the real world. It’s not an infinite frictionless plane, it’s a vast swamp of molasses.</p>\n<p>You can ideally harness intrinsic energy from another <card-link card=\"g48a31f22cb_0_45\">agent</card-link>, instead of heroics</p>\n"
	},
	"g48845643ff_0_265": {
	  "body": "<p>People like detail</p>\n<p>Abstract ideas require more background knowledge, more to nitpick.</p>\n<p>Exacerbated by Silicon Valley’s over-reliance on the technical lens.</p>\n<p>Only <card-link card=\"g48845643ff_0_459\">communicate your northstar as widely as you need to</card-link></p>\n",
	  "title": "Abstract ideas are harder to communicate at scale"
	},
	"g48845643ff_0_270": {
	  "body": "<p>It’s tempting to pretend that the <card-link card=\"g48845643ff_0_255\">hidden forces</card-link> don’t exist or can be ignored.</p>\n<p>But, like, gravity, they’re powerful and omnipresent. Once you understand them and work <em>with </em>them instead of pretending they don’t exist, you can harness them to do useful things, like slingshoting a rocket to the moon.</p>\n",
	  "title": "Ignoring hidden forces is a recipe for disaster"
	},
	"g48845643ff_0_276": {
	  "body": "<p>Because they are <card-link card=\"g487aed6370_0_321\">continuous processes (which are hard to notice)</card-link>, and because they can be very subtle, merely picking to <card-link card=\"g487aed6370_0_231\">zig instead of zag</card-link>.</p>\n<p>As a positive, this means that systems often <card-link card=\"g48845643ff_0_276\">won’t resist them</card-link> because they don’t feel like undue influence.</p>\n<p>As a negative, it means that even if you pull off a long-term miracle by careful nudging, leadership might think “that was always going to happen”. One trick to mitigate that is <card-link href=\"https://twitter.com/mekkaokereke/status/1027552576454021120\">difficulty anchoring</card-link>.</p>\n",
	  "title": "Well-applied nudges are indistinguishable from luck"
	},
	"g48845643ff_0_281": {
	  "body": "<p>Going farther afield requires more energy--sometimes a lot more.</p>\n<p>But successful ecosystem engines have TONS of energy, so they can hop farther afield.</p>\n<p>Think of it like firebreaks, a powerful forest fire and hop larger and larger breaks.</p>\n",
	  "title": "The more energy in a system, the bigger its adjacent possible"
	},
	"g48845643ff_0_286": {
	  "title": "An aggregator is an ecosystem with one primary beneficiary",
	  "body": "<p>So not open in the classical sense.</p>\n"
	},
	"g48845643ff_0_291": {
	  "body": "<p><card-link card=\"g487aed6370_0_101\">Politics is a fact of life that emerges organically</card-link> any time that there are a number of humans in a system, because they are a mixture of self-optimizing agent behavior and emotions at scale.</p>\n<p>However, there are actions that create more politics, and all other things equal, <card-link card=\"c-893-dcb452\">more politics in a situation is worse than less politics</card-link>. For example, an action taken in partial bad faith will rightfully erode general trust in the system, perhaps even causing people to doubt other people who are engaging in good faith. Conversely, operating in a principled way in good faith to <card-link card=\"g487aed6370_0_91\">do the right thing from the broadest possible perspective</card-link> can reduce politics.</p>\n<p>There is a difference between <em>playing </em>politics and <em>navigating </em>politics. Navigating politics implies savvily operating within a political context in a way that either keeps the politics constant or helps minimize them. Playing politics,&nbsp; on the other hand, implies a more cynical approach that likely creates more politics and is thus morally questionable.</p>\n",
	  "title": "Navigating politics vs playing politics"
	},
	"g48845643ff_0_296": {
	  "body": "<p>First, never <card-link card=\"g48845643ff_0_291\">play politics</card-link>.</p>\n<p>Demonstrates that you’re self-serving and your motives shouldn’t be trusted, while also being a way of <card-link card=\"g487aed6370_0_301\">over-using informal authority, massively eroding it</card-link>.</p>\n",
	  "title": "Playing politics badly is the worst of all worlds"
	},
	"g48845643ff_0_301": {
	  "body": "<p>At the lower levels of an organization, execution and efficiency are most important.</p>\n<p>Nuanced approach to complex spaces often feels like navel-gazing in the short term, fanciful, abstract, and disconnected from reality. The nuanced approach is obviously powerful when its full effect is seen, but you have to build to that point.</p>\n<p>It takes time for a nuanced approach to show its (compounding!) value, but during that time you need to rely on a large bank of <card-link card=\"g48845643ff_0_311\">credibility</card-link>, often from someone with authority (formal or informal) at a high level in the organization.</p>\n<p>If you don’t have that, you’ll have to make small bets to earn credibility, which will take a very long time to show compounding value.</p>\n",
	  "title": "Support for nuanced approach needs to come from the top"
	},
	"g48845643ff_0_306": {
	  "body": "<p>Double or nothing</p>\n<p>See also <card-link card=\"g487aed6370_0_301\">over-extending authority</card-link></p>\n",
	  "title": "Earning credibility entails putting some on the line"
	},
	"g48845643ff_0_311": {
	  "title": "Credibility is informal authority",
	  "body": "<p>Authority is people giving you the benefit of the doubt--taking what you say as a given by default.</p>\n<p>Formal authority comes from being formally empowered in an org structure. Informal authority is earned credibility.</p>\n<p>In a healthy org, formal and informal authority have a high correlation.</p>\n<p>Note that in bottoms-up cultures, sometimes informal authority is way more important than formal authority.</p>\n<p>Credibility is often called “political capital”.</p>\n<p>These are all <card-link card=\"c_625_ffb204\">types of power</card-link>. See also <card-link card=\"c-918-bfb380\">expertise is power</card-link>.</p>\n"
	},
	"g48845643ff_0_332": {
	  "title": "Continuous processes avoid shocks, keeping the current loops",
	  "body": "<p>The intrinsic logic of a system can be upended when there’s a sufficiently poweful external shock.</p>\n<p>But a continuous process tends to keep the same loops in place (although at different points different balancing loops might stop being dormant)</p>\n<p>As an example, because culture of a team is a system, slowing adding more people one at a time is a continuous process, meaning that the culture will stay the same. This can be either a bad or good thing.</p>\n"
	},
	"g48845643ff_0_337": {
	  "body": "<p>Everything is a big gray fog. What you choose to give a handle/name changes how it chunks in how people perceive of it, and talk about it with others.</p>\n<p>The name itself often doesn’t matter TOO much (except for mass consumer things), more about what you to decide to lump together into one name (or system of related names)</p>\n<p>How Brand-y the name is affects how people see it, and there are different levers</p>\n",
	  "title": "Giving something a name makes it A Thing"
	},
	"g48845643ff_0_342": {
	  "body": "<p>Application of compounding infrastructure, or rather the same fundamental insight</p>\n<p>Don’t jump to execution before doing discovery phase</p>\n",
	  "title": "Go slow to go fast"
	},
	"g48845643ff_0_347": {
	  "body": "<p>…Wherever possible, if the sytem or operative framing can have that property</p>\n",
	  "title": "Positive sum framings are always preferable long term\t"
	},
	"g48845643ff_0_352": {
	  "title": "Wording implying zero-sum framings is suspect",
	  "body": "<p>Using words like fight, beat, battle, “win”, all imply a zero-sum framing.</p>\n<p>If they keep coming up, watch out, because they might reveal the underlying wrong mind-set.</p>\n"
	},
	"g48845643ff_0_357": {
	  "body": "<p>People watch how others behave, and what behavior is rewarded or tolerated, and those _become_ the norms. Self-reinforcing.</p>\n<p>One of the reasons that noting microaggressions in the moment is important</p>\n",
	  "title": "Cultural norms are emergent properties"
	},
	"g48845643ff_0_362": {
	  "body": "<p>Things that arise naturally out of the dynamics of the system and the interactions of the pieces within the systems</p>\n<p>Can be hard to predict</p>\n<p>Sometimes only simulation can help predict</p>\n",
	  "title": "Emergent properties"
	},
	"g48845643ff_0_367": {
	  "title": "Lend privilege where you have it",
	  "body": "<p>Higher leverage than someone without it</p>\n<p>An action you take might be 100x more effective at setting the right cultural norms</p>\n"
	},
	"g48845643ff_0_37": {
	  "title": "Minimizing your power in an ecosystem can help it thrive",
	  "body": "<p>This is best if it’s a <card-link card=\"g4a6111ef7e_0_35\">trustworthy signal</card-link>. One example is deliberately making the project <card-link card=\"g4a6111ef7e_0_40\">easy to fork</card-link>, or allowing members of the community to become committers.</p>\n"
	},
	"g48845643ff_0_372": {
	  "body": "<p>Especially in complex spaces, especially in environments where everyone’s incentives are (mostly) aligned</p>\n<p>Always be curious</p>\n",
	  "title": "Assume obstacles are helping you avoid a cliff you can’t see"
	},
	"g48845643ff_0_377": {
	  "body": "<p>Everything is gray, but some complex ideas have a quick, black/white framing that is wrong but viral (activate moral outrage, fit with preconceived notions or themes, etc)</p>\n<p>Those topics are hard to have rational discourse on without carefully organizing the conversation.</p>\n<p>One of the reasons that policies are hard to discuss in a vote of non-experts, because topics that are complex enough and FUD-able enough can’t come to good outcomes.</p>\n<p>This is an example of the (often forgotten) balance between <card-link card=\"g4a9e93532f_0_5\">transparency and candor</card-link>.</p>\n",
	  "title": "FUD-able ideas are hard to debate in public"
	},
	"g48845643ff_0_388": {
	  "body": "<p>You're probably familiar with technical debt, but it's also a useful concept elsewhere. You can think of debt as the <card-link card=\"c-195-dcb133\">distance from a full-fidelity version of the thing in question</card-link>. Flavors of debt are in the domains of <strong>outputs</strong> and <strong>organizations</strong>.</p>\n<ul>\n\t<li>(Output) <strong><card-link card=\"c-674-adb639\">Product debt</card-link> - </strong>Missing P2 features that add up to a much jankier feel</li>\n\t<li>(Output)<strong> <card-link card=\"c-021-eed055\">Platform debt</card-link> - </strong>Distance from being a <card-link card=\"c-144-fed076\">rational platform</card-link></li>\n\t<li>(Output) <strong><card-link card=\"c-884-edc565\">Conceptual debt</card-link> - </strong>Number of concepts a power user has to fully grok</li>\n\t<li>(Output) <card-link card=\"c-593-aca793\"><strong>Ecosystem debt</strong></card-link> - Amount of unhealthy behaviors ecosystem members do</li>\n\t<li>(Organization) <card-link card=\"g4a9e93532f_0_50\"><strong>Org structure</strong></card-link> debt - A dissonance between org structure and product goals</li>\n\t<li>(Organization) <strong>Team culture</strong> debt - An unhealthy or unsustainable team culture</li>\n\t<li>(Organization) <card-link card=\"c-405-ccf346\"><strong>Infrastructure </strong>debt</card-link> - Debt in tooling and process</li>\n</ul>\n<p><card-link card=\"g487aed6370_0_207\">Preventative maintenance</card-link> is paying down this debt ahead of time, which you should do as a <card-link card=\"c-581-ddd825\">continuous tax</card-link>. This helps you have <strong>resiliency </strong>to the shocks that are inevitable but whose details are unknowable a priori.</p>\n",
	  "title": "Debt comes in many forms"
	},
	"g48845643ff_0_398": {
	  "body": "<p>Velocity captures that speed in the wrong direction is not useful (and perhaps actively harmful)</p>\n",
	  "title": "Speed vs Velocity"
	},
	"g48845643ff_0_403": {
	  "body": "<p>Our brains are good at low-fidelity but highly-parallel <strong>pattern matching</strong>. It can do cheaply and even when we aren’t aware of it--although sometimes it has false positives.</p>\n<p>However, our intuition can fall prey to many well-documented biases. (e.g. simulating  thing and reading out our emotions; recency bias; halo effect; etc) This bias can be especially damaging to under-represented groups.</p>\n<p>Intuition can give us a “gut” that there’s some connection to make. But because of biases we need to <strong>trust but verify</strong>. You can do this by working to distill the intuition into specific <card-link card=\"g487aed6370_0_50\">insights</card-link>. If those are strong enough to re-derive the end analysis to others, that’s a good sign it wasn’t just a bias.</p>\n<p>Intuition is a skill that can be sharpened by exercise and giving it more patterns to match against. <card-link card=\"g48a31f22cb_0_30\">The best leads have highly sharpened intuition</card-link>.</p>\n",
	  "title": "Intuition relies on a super-power of our brains"
	},
	"g48845643ff_0_408": {
	  "body": "<p>Because there are fewer signals that they might be wrong (especially if they’re senior).</p>\n<p>The more senior you are, the more actively you have to try to rigorously test your ideas and have others dig into them and try to break them (e.g. a Red Team)</p>\n<p>Related to <card-link card=\"c-745-afc766\">powerful people are blind to their power</card-link>.</p>\n",
	  "title": "Confirmation bias affects privileged people the most"
	},
	"g48845643ff_0_413": {
	  "body": "<p>That the technical lens is the one true lens</p>\n",
	  "title": "Silicon valley’s technical hubris"
	},
	"g48845643ff_0_423": {
	  "title": "Structurally create opportunities for dissent",
	  "body": "<p>Even in a collaborative debate, people will shy away from dissent to maintain harmony.</p>\n<p>So structurally introduce it, by having a Red Team whose job is to (respectfully) seek to say why the idea won’t work. Or have as a gate that the group has to brainstorm five ideas why it won’t work.</p>\n<p>Surfacing those ideas helps bring the group together; allows people to get doubts on the table, and to have more confidence that other headwinds aren’t lurking</p>\n"
	},
	"g48845643ff_0_428": {
	  "body": "<p>Everyone wants teams that are creative, not afraid to fail, etc.</p>\n<p>But actions speak louder than words. Organizations have to reward the right behaviors, and tolerate respectful dissent or divergent thinking.</p>\n<p>Leads can inadvertently squelch this by applying their power differential (intentionally or unintentionally)</p>\n",
	  "title": "Actions matter more than words"
	},
	"g48845643ff_0_433": {
	  "body": "<p>E.g. if a process doesn’t actually model the problem space correctly but everyone is forced to pretend like it does</p>\n<p>A similar mechanic as <card-link card=\"g487aed6370_0_306\">bad structure actually obfuscating</card-link>.</p>\n<p>Or a team <em>says</em> they value creativity and new ways of thinking but in practice has rigid structure that subtly punishes new ways of looking at problems, since actions matter more than words.</p>\n",
	  "title": "Dissonance is stressful and expensive"
	},
	"g48845643ff_0_438": {
	  "body": "<p>If you aren’t growing or learning, you may be in a rut.</p>\n<p>A few things that can shake things up:</p>\n<ul>\n\t<li>Career or role change</li>\n\t<li>Moving abroad for 6 months or more</li>\n\t<li>Intentionally do something you’re bad at</li>\n\t<li>Seek out people who are very unlike yourself</li>\n</ul>\n<p>Always be curious. When you’re surprised, dig in and learn more!</p>\n",
	  "title": "Getting yourself out a rut"
	},
	"g48845643ff_0_443": {
	  "title": "Motivated agents can search the adjacent possible for you",
	  "body": "<p>The <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> is a search space to find the good ideas that are possible to reach without <card-link card=\"g487aed6370_0_241\">discontinuities</card-link>. Often you have to search the space yourself, which is expensive, and can be thought of as a form of <card-link card=\"g48845643ff_0_215\">unsustainable heroics</card-link>.</p>\n<p>But if there are <card-link card=\"g48845643ff_0_443\">motivated agents</card-link> whose energy you can harness (e.g. developers, highly motivated users) you can allow them to search the space and find the good ideas for you.</p>\n<p>A lot of consumer product approaches presume that people won’t do things unless you push them to. If they’re intrinsically motivated a lot of other approaches open up.</p>\n<p>Note that this will happen any time there are motivated actors. If their incentives aren’t fully aligned with yours (and they never are perfectly), the <card-link card=\"g48845643ff_0_250\">result can be problematic</card-link>.</p>\n"
	},
	"g48845643ff_0_453": {
	  "title": "The myth of infrastructure",
	  "body": "<p><em>Inspired by </em><em><card-link href=\"https://www.usv.com/blog/the-myth-of-the-infrastructure-phase\">The Myth of the Infrastructure Phase</card-link></em><em>. See also </em><em><card-link card=\"g48a31f22cb_0_50\">minimize time to initial value</card-link></em><em></em></p>\n<p><card-link card=\"g487aed6370_0_20\">Useful infrastructure has a compounding effect</card-link>, especially when it allows developers to tackle problems that were previously impossible, adding an additional compounding. When you’re trying to create a developer offering (internal or external) it can be tempting to believe “build it and they will come”.</p>\n<p>However, in complex spaces the detailed solution you build will almost always violate <card-link card=\"g487aed6370_0_161\">currently hidden constraints</card-link>. <strong>Infrastructure should only be built in response to </strong><strong><em>concrete</em></strong><strong> customer demand</strong>. Concrete means that there are a handful of specific customers who have proactively told you they want to use it.</p>\n<p>Then, <strong>invest energy to meet inbound energy</strong>. You might start with a small kernel of demand, but can quickly grow it via compounding effects into something much larger.</p>\n"
	},
	"g48845643ff_0_459": {
	  "title": "North stars don’t have to be socialized widely to be effective",
	  "body": "<p><card-link card=\"g487aed6370_0_81\">North stars</card-link> help you and the team decide between zig and zag points day to day.</p>\n<p>Socializing abstract ideas are hard, and in bottoms-up organizations, can be very expensive.</p>\n<p>If you don’t need someone to know the north star, sometimes you don’t need to emphasize it. In addition, your short-term plans should all plausibly add short-term value on their own (with the fact they move closer to the north star a bonus).</p>\n"
	},
	"g48845643ff_0_464": {
	  "title": "Tells that you’re in a complex space",
	  "body": "<ul>\n\t<li>Finger-pointing among teams</li>\n\t<li>Frustration with no obvious cause</li>\n\t<li>Strongly differing ideas about what the next step is</li>\n</ul>\n<p>… And remember, almost all problems are actually complex. Just take it as a given.</p>\n"
	},
	"g48845643ff_0_469": {
	  "title": "Make space for long-term thinking",
	  "body": "<p>People crave detail and like to focus on execution and “getting things done.” But long-term thinking is important in complexity. You must <strong>actively create space for it</strong>.</p>\n<p>Carve out time to discuss the long-term, insulating it from the chaos of the day-to-day with a block of time scheduled far in advance. Some people naturally like long-term thinking more. Don’t force those who don’t like it to attend if they don’t want (but make sure they’re invited).</p>\n<p>Offsites (when budget allows) help get people outside of their normal routines, making it easier to think long-term.</p>\n<p>If you can’t convince your team to take the time, force <em>yourself</em> to. Schedule a fake OOO day that you devote entirely to long-term reflection.</p>\n"
	},
	"g48845643ff_0_479": {
	  "body": "<p>Even when it’s early, because <card-link card=\"g48845643ff_0_215\">they’re a form of unsustainable heroics</card-link> and should only be used for a short period.</p>\n<p>If they work, then there’s never a good time to stop (at each time step, the easier thing to do is keep layering on duct tape than to fix the underlying problem, which continues to get more expensive). And more often, they get you stuck in corners from which there is no sustainable approach to be found.</p>\n<p>It can be OK if:</p>\n<ul>\n\t<li>It’s a time-boxed search for Product Market Fit, and you have a commitment to pause and do it more sustainably if you find fit.</li>\n\t<li>OR there’s a plausible incremental path to grow the unsustainable solution to a sustainable, equilbrium solution with no discontinuities</li>\n</ul>\n",
	  "title": "Beware doing non-scalable things"
	},
	"g48845643ff_0_48": {
	  "body": "<p>Everything is in balance</p>\n",
	  "title": "Openness has large benefits but also large downsides"
	},
	"g48845643ff_0_484": {
	  "body": "<p>As long as you have a clear north-star, so it’s not a random walk</p>\n",
	  "title": "Incrementalism is not a bad word"
	},
	"g48845643ff_0_489": {
	  "body": "<p>Partially due to hero worship</p>\n<p>Partially due to an over-reliance on the technical lense, which reduces many complex problem spaces to chaotic (unknowable), so any option is as good as any other.</p>\n<p>Intentional risk is sometimes the best play if the EV is positive and you’ve de-risked as much as you can, but risk on its own, all other things equal, is actively bad.</p>\n",
	  "title": "Silicon Valley fetishizes risk"
	},
	"g48845643ff_0_494": {
	  "title": "If you can’t be an impartial judge, find one",
	  "body": "<p>Someone who doesn’t have skin in the game</p>\n<p>Helps protect against bias from within a team of various types, to ask the hard questions and help you weigh the evidence.</p>\n"
	},
	"g48845643ff_0_499": {
	  "body": "<p>Similar to NP-Hard proofs</p>\n<p>If you’re trying to figure out if a given use case is plausibly strong in some context, but the use case, if it were strong, would be strictly stronger in the siimilar but more common context, but doesn’t exist, that strongly implies that the use case is not viable for some currently unknown reason</p>\n",
	  "title": "A problem is hard if it can be reduced to a hard problem"
	},
	"g48845643ff_0_504": {
	  "body": "<p>Intuition can be biased in various ways.</p>\n<p>Rubrics are a nice tool to systematize your thinking, which makes it easier to analyze whether it’s plausible and unbiased.</p>\n<p>A well-distilled rubric can sharpen your intuition and clarify where ambiguity remains (and how much is left).</p>\n<p>Of course, be careful not to let it replace your thinking, only guide it.</p>\n",
	  "title": "Rubrics can help systematize thinking"
	},
	"g48845643ff_0_509": {
	  "body": "<p>Some people just want to have averserial discussion and are not in <card-link card=\"g487aed6370_0_141\">learning mode</card-link>.</p>\n<p>You can <strong>ask questions </strong>instead to get them to self-reflect and perhaps get to a point where they’re more open to new ideas or understand the complexity in the space:</p>\n<ul>\n\t<li>What is the end that this helps us accomplish?</li>\n\t<li>What would change your mind?</li>\n\t<li>What are the principles underlying that decision?</li>\n\t<li>What might the second-order effect of this decision be?</li>\n\t<li>Why do you feel strongly about this? What are you most worried about? What fear or anxiety does this decision help alleviate for you?</li>\n\t<li>Why hasn't someone else done this already?</li>\n\t<li>What are some ways this idea could fail?</li>\n</ul>\n",
	  "title": "If people don’t want to engage in discovery, ask questions"
	},
	"g48845643ff_0_514": {
	  "title": "Set success and kill criteria before the project gets going",
	  "body": "<p>Take advantage of humans’ tendency to view far-future things abstractly and near-term things through emotion and bias.</p>\n<p>Get everyone to agree on what success or theres-no-way-this-works-if-this-is-true kill criteria look like <em>before </em>everyone gets overly emotionally tied to the solution they’re working on.</p>\n"
	},
	"g48845643ff_0_519": {
	  "body": "<p>For consumer products you have to push for users to use it.</p>\n<p>A launch is a do or die roll of the dice. Maybe an influential blogger ate a bad burrito that day.</p>\n<p>If you don’t need a launch “bump” (which you don’t if there is intrinsic motivation from some subset of users) then avoid launch, look for a smooth roll out.</p>\n<p>Do things in public from the beginning (in open source) is an applciation of this insight</p>\n",
	  "title": "Launches are discontinuities"
	},
	"g48845643ff_0_524": {
	  "title": "“Developers are just a different type of users” is misleading",
	  "body": "<p>Yes, some of the same lenses (like CUJ) can be applied to developers.</p>\n<p>But for developers, the more salient lenses are ones that understand motivation, incentives, and compounding ecosystem effects. The lenses that work best for normal consumer products can be actively misleading or distracting.</p>\n<p>A specific example of a <card-link card=\"c_970_bce901\">more general principl</card-link>e.</p>\n"
	},
	"g48845643ff_0_529": {
	  "body": "<p>If there’s plausibly a systemic issue at play (which most human issues are), analyze the systems that led people to do certain things, not that a specific individual was bad. That’s a cop out and prevents understanding and fixing the underlying issues.</p>\n<p>The insight behind blameless post mortems.</p>\n<p>A parallel to the fundamental attribution error.</p>\n",
	  "title": "Analysis should focus on the system, not specific individuals"
	},
	"g48845643ff_0_534": {
	  "body": "<p>Document mistakes to the root cause. Extract more abstract patterns. Distill them into the key insights so they can be more viral. Share them widely. Seek advice and cross-pollination so others can help you avoid mistakes you haven’t yet made, but they have before.</p>\n",
	  "title": "Don’t make the same mistake again"
	},
	"g48845643ff_0_539": {
	  "title": "“Infrastructure” means more than literal infrastructure",
	  "body": "<p>Can be accumulated expertise, battle-tested code, battle-tested processes, usage patterns, momentum,</p>\n"
	},
	"g48845643ff_0_544": {
	  "body": "<p>Parallel to minimize miracles</p>\n",
	  "title": "Hope is not a strategy"
	},
	"g48845643ff_0_549": {
	  "body": "<p>Because we naturally look for confirming information, and because in friendly environment dissent is seen as rude.</p>\n<p>But in complex spaces, seeking disconfirming information is the most important thing you can do.</p>\n<p>You should always <strong>be skeptical--especially of things you <em>want</em> to be true</strong>.</p>\n<p>Assume you’re the villain</p>\n<p><card-link card=\"c-602-aea694\">Ontological humility</card-link></p>\n",
	  "title": "Actively seek out disconfirming information"
	},
	"g48845643ff_0_554": {
	  "title": "Bootstrap cultural norms with ringers",
	  "body": "<p>If you have a new mailing list, have a few ringers share thoughts, and behind the scenes encourage people to respond publicly and substantively.</p>\n<p>After you do it a few times, the culture will have taken hold and will be self-sustaining.</p>\n"
	},
	"g48845643ff_0_564": {
	  "title": "If you’re stuck",
	  "body": "<p>Imagine (temporarily) that a fundamental assumption is actually the opposite. It probably isn’t, but that can shake up the thinking enough to dislodge new insights</p>\n<p>Also, rubber ducking works</p>\n<p>Also, <card-link card=\"g487aed6370_0_151\">asking why</card-link></p>\n"
	},
	"g48845643ff_0_569": {
	  "body": "<p>Is just a random walk. But if you have a north-star, you pick the thing that has the highest velocity: the highest speed in the general direction of the goal.</p>\n",
	  "title": "Picking the most user value..."
	},
	"g48845643ff_0_574": {
	  "title": "The highest cost is often opportunity cost",
	  "body": "<p>When there are near infinite different next actions you could take, and finite resources</p>\n<p>Opportunity cost is hidden within the team, though, because the tradeoff isn’t visible, it’s all benefit, no cost.  It’s only from a higher-level perspective in the org that the trade-off can be seen. This means that sometimes within a team, a person who sees the opportunity cost is seen as overly conservative, or a wet blanket, and the team might seek to route around.</p>\n<p>The bar is not whether \"is this a good idea” but rather “<strong>is this idea better than the other things we could be doing?</strong>”.</p>\n"
	},
	"g48845643ff_0_60": {
	  "body": "<p>Although the constraints are often not simple constraints, but abstract ones.</p>\n<p>There are a handful of <card-link card=\"g48845643ff_0_66\">different types of constraints</card-link>.</p>\n",
	  "title": "Even complex problems are constraint satisfaction problems"
	},
	"g48845643ff_0_66": {
	  "body": "<p>Even complex problem spaces can be <card-link card=\"g48845643ff_0_60\">thought of as constraint satisfaction problems</card-link>.</p>\n<p><card-link card=\"g487aed6370_0_161\">Good solutions are ones that don’t violate any constraints</card-link> (even hidden or not-yet-discovered ones), and <card-link card=\"g487aed6370_0_261\">have the wind at your back</card-link>.</p>\n<p>There are a number of categories of constraints:</p>\n<ul>\n\t<li><card-link card=\"g48845643ff_0_72\">Straightforward</card-link></li>\n\t<li><card-link card=\"g48845643ff_0_78\">Hidden but concrete</card-link></li>\n\t<li><card-link card=\"g48845643ff_0_84\">Fundamentally fuzzy</card-link></li>\n</ul>\n",
	  "title": "Constraints come in different flavors"
	},
	"g48845643ff_0_7": {
	  "body": "<p>A polarity between resilience and cleanliness.</p>\n",
	  "title": "Openness is a spectrum"
	},
	"g48845643ff_0_72": {
	  "body": "<ul>\n\t<li>Headcount</li>\n\t<li>Funding runway</li>\n\t<li>Distribution costs</li>\n</ul>\n",
	  "title": "Types of simple constraints"
	},
	"g48845643ff_0_84": {
	  "title": "Laser beams: Fundamentally fuzzy constraints",
	  "body": "<p>Examples: office politics, how easy-to-communicate an idea is,</p>\n"
	},
	"g48845643ff_0_90": {
	  "title": "‘Always’ rules are better than ‘sometimes’ rules",
	  "body": "<p>A specific version of “discontinuities” and slippery slope</p>\n<p>In general, when you have a motivated actor who is incentivized to find and exploit wiggle room, a bright line that contains the desired behavior (even if it’s loose) is worse than one that is tigher but less clear boundaries</p>\n<p>Useful for self-control to force you to do what you want to want</p>\n<p><em>See also the original essay, </em><em><card-link href=\"https://medium.com/@komorama/for-self-control-always-rules-are-better-than-sometimes-rules-4c38be32f318\">For self control, ‘always’ rules are better than ‘sometimes’ rules</card-link></em><em></em></p>\n"
	},
	"g48845643ff_0_95": {
	  "title": "The importance of aligning short and long-term incentives",
	  "body": "<p>Especially individual short-term incentives with aggregate long-term incentives</p>\n<p>Hard to do in general, but when you find an idea that does align them, it’s likely a good idea.</p>\n<p>Sometimes you can add small nudges that take advantage of defaults in</p>\n<p>When the incentives don’t align where you want (which they rarely do), you’ll find outcomes you don’t want (and maybe no one does)</p>\n<p>Sometimes you can use <card-link card=\"g4a41d8c468_1_27\">guardrails to overcome small obstacles</card-link>.</p>\n"
	},
	"g48845643ff_1_10": {
	  "body": "<p>The challenge and overhead of complexity goes up with the square of the “size” of the complex region.</p>\n<p>Often in an overwhelmingly complex problem space you’ll come across aspects of the problem that are well contained and isolated, and almost certainly need to be fixed.</p>\n<p>These sub-pieces are often merely complicated, and by factoring them out you can reduce the overall scope of the complexity of the rest of the space. If you do this often enough you can have a non-linear reduction in challenge in your space.</p>\n<p><card-link card=\"g487aed6370_0_286\">Beware, however, the natural tendency to factor out too much</card-link>, because complex problem spaces often have i<card-link card=\"g4a9e93532f_0_10\">rreducible complexity at their core</card-link>. Identifying <card-link card=\"g487aed6370_0_20\">useful infrastructure</card-link>--things that will have value in almost any possible future--is one way of chipping off sub-problems effectively.</p>\n",
	  "title": "Factor out complicated pieces of your problem space"
	},
	"g48845643ff_1_15": {
	  "body": "<p>Lots of maneuvering room within the solution space, giving you flexibility no matter how the world ends up going</p>\n",
	  "title": "Ideas with larger adjacent possibles are better ideas"
	},
	"g48845643ff_1_20": {
	  "body": "<p>Uncertainty takes energy to tackle.</p>\n<p>Ruts are factoring out the parts of your day or routine that don’t change much to reduce them to fully complicatd, or even obvious, problem spaces.</p>\n<p>That leaves more mental energy to focus on complex problems</p>\n<p>Efficiency is the top soil for creativity</p>\n<p>Flaubert quote, “Be regular and orderly in your life so you may be violent and original in your work.”</p>\n",
	  "title": "Ruts help maximize energy to devote to novel problems"
	},
	"g48845643ff_1_25": {
	  "title": "In complexity, teams need maneuvering room",
	  "body": "<p>Packing them in too tightly minimizes <card-link card=\"g4a5429b3f0_0_0\">maneuvering room</card-link>, and can lead to two bad situations: This is doubly true for PMs, who are often the savviest at navigating</p>\n<p>First is putting agents in competition over the same territory, which is fundamentally zero-sum (territory is rivalrous), which implies strife and conflict.</p>\n<p>The second is effectively the opposite. For territory in the middle that no one unambiguously owns, sometimes <em>no </em>agent will take responsibility, because they want to avoid stepping on the other agent’s toes, and want to avoid conflict.</p>\n<p>The solution for both is to ensure that the org structure (as much as possible) has a single decider who presides over the combined scope, which gives them <card-link card=\"g4871092f30_0_1561\">a positive-sum perspective</card-link> and helps them see where the structure is not set up for success.</p>\n"
	},
	"g48845643ff_1_30": {
	  "body": "<p>In complexity there are rarely obvious signals, but rather subtle ones that all independently point in the right direction. It’s only by carefully digging and distilling and organizing the insights that it becomes clear the direction to go into.</p>\n<p>You need to be in tune with those signals, know where to dig more.</p>\n",
	  "title": "The Spidey Sense helps detect subtle but useful signal"
	},
	"g48845643ff_1_35": {
	  "title": "Empathy is critical in complex spaces",
	  "body": "<p>You need to be able to see a problem from different perspectives, which requires being able to see things from other people’s perspectives, both to detect when there’s some subtle signal they’re trying to give you, and also as a novel vantage point to see new things from.</p>\n<p>If you see things as obstacles in complex spaces, it’s a recipe for disaster</p>\n<p>If empathy doesn’t come naturally for you, there are some tricks to force it:</p>\n<ul>\n\t<li>Identify a thing you think is an obvious good, then imagine what it’s in tension with, and why that thing could possibly be good</li>\n</ul>\n"
	},
	"g48845643ff_1_40": {
	  "body": "<p>Polarities are two good things in fundamental tension and trade-off.</p>\n<p>The right balance point depends on the context, and often needs subtle adjudgements and nudges.</p>\n<p>But the feedback loop is long, which leads to <card-link card=\"g4a41d8c468_1_72\">swinging over-corrections by default</card-link>.</p>\n<p>Polarities are had to detect mis-balances in practice because there’s not ONE polarity with a two-dimensional balance (which is hard enough to detect) but a three dimensional sweep of them that all need to be kept in balance, and it’s hard to keep track of which ones might be salient</p>\n<p>And often there are polarities that aren’t obvious (<card-link card=\"g4a9e93532f_0_5\">like transparency vs candor</card-link>)</p>\n",
	  "title": "Polarities are difficult to keep in balance"
	},
	"g48845643ff_1_45": {
	  "title": "Often the system is way more relevant than the individual",
	  "body": "<p>It’s tempting to attribute success, failure, behavior to the intrinsic properties of an individual.</p>\n<p>But in practice the system in which that individual operates is often far more predictive of how they will behave than their intrinsic properties.</p>\n<p>Being good is necessary but not sufficient for success. Luck is a critical component, and depending on the context of where you are in the system, the distribution of “luck” can be radically different.</p>\n<p>This illusion is one that leads to meritocracy/inequality running rampant</p>\n<p><card-link href=\"https://twitter.com/ldobsonhughes/status/1070487063378739201\">Example</card-link></p>\n"
	},
	"g48845643ff_1_5": {
	  "body": "<p>In complexity the best way to work is to <card-link card=\"g487aed6370_0_256\">have your north-star, and then pick solutions with the wind at your back with high velocity towards that north star</card-link>.</p>\n<p>You often want to pick short-term direction based on what feels best without over-complicating it, but that is only a good idea if you already have a good sense of the overall dynamics of the space well enough first. Because <card-link card=\"g487aed6370_0_55\">people tend to prefer detail</card-link>, there is a strong bias to leave discovery phase way too early.</p>\n<p>If you don’t understand your problem space well enough to have a <card-link card=\"g487aed6370_0_81\">north-star that is both plausible and good</card-link>, then that lack of understanding will come back to bite you, in the short or medium term.</p>\n",
	  "title": "Ignoring complexity will come back to bite you"
	},
	"g48845643ff_1_50": {
	  "title": "Compromise is often a cop out",
	  "body": "<p>Just because <card-link card=\"g487aed6370_0_251\">everything’s in balance</card-link> and the best way to understand complex spaces is <card-link card=\"g487aed6370_0_35\">collaborative debate</card-link> does not mean that designing things by committee is good.</p>\n<p>Design by committee often implies repeatedly making <strong>compromises</strong> that no one entity is particularly happy with. In some cases, like where the decision will determine which of the participants reaps the benefits, compromise is necessary (unless you can <card-link card=\"g48845643ff_0_494\">find a positive-sum judge</card-link>).</p>\n<p>But other types of compromise are actively bad, because they imply to some extent that the problem space isn’t understood well enough to come to a conclusion that everyone can affirmatively agree is good.</p>\n<p><card-link card=\"g487aed6370_0_131\">Leadership is strong opinions, weakly held</card-link>.</p>\n"
	},
	"g48845643ff_1_60": {
	  "body": "<p>Embracing complexity means letting go of the details that don’t matter. But the key is “that don’t matter.” Often that’s only clear in retrospect.</p>\n<p>The main test is whether if this detail took any of likely values the direction of the next step would change (if not, it doesn’t matter). But that assumes that you know your north star.</p>\n",
	  "title": "Distinguishing which details don’t matter is hard"
	},
	"g48a31f22cb_0_10": {
	  "body": "<p>In complex problem spaces, there’s a <card-link card=\"g487aed6370_0_5\">discovery phase and a performance phase</card-link>. Although you should always be in learning mode and willing to see your idea is actually bad, during the performance phase the emphasis should be on communicating why the idea is good.</p>\n<p>Each additional person who comes to the idea has some static probability of wrongly thinking a good idea is a bad one. If people see someone reactive negatively they are much more likely to react negatively too, creating a compounding effect.</p>\n<p>The more relatively powerful a person is, the bigger the setback for a negative reaction. Thus the risk of a socialization at a given event goes up <strong>exponentially with number of new people in the event, multiplied by the power differentials</strong>. Break your socialization into discrete, smaller socialization steps that minimize this risk. If you must have a discontinuity, work to derisk it.</p>\n",
	  "title": "Minimize discontinuities in the performance phase"
	},
	"g48a31f22cb_0_15": {
	  "title": "Bad ideas look good from a distance",
	  "body": "<p>The world is full of constraints</p>\n<p>Even the least-bad ideas look bad from close up, which leads to a bias towards discarding an idea too easily.</p>\n<p>Simulated annealing</p>\n<p>Details kill most ideas, by either finding a fundamental constraint that is violated, or by just looking messy or arbitrary</p>\n"
	},
	"g48a31f22cb_0_20": {
	  "title": "If you must have a performance discontinuity, derisk it",
	  "body": "<p>To socialize ideas you want to <card-link card=\"g48a31f22cb_0_10\">break up the steps into smaller discrete steps to minimize the risk of a good idea derailing</card-link>.</p>\n<p>But sometimes you have no choice, for example for a review with many new people in it. In those cases, invest time in pre-work to minimize the risk.</p>\n<p>The ideal is to have a (high-level) idea of where most peopls’ heads are at make sure they have a high-level understanding of the idea so they <card-link card=\"g48a31f22cb_0_25\">aren’t surprised in the meeting</card-link>. This is especially true for people with high relative power.</p>\n<p><card-link card=\"g487aed6370_0_196\">1:1s are magic</card-link>, so they are the ideal way to do pre-work. Approach them as mini collaborative debates to uncover new insights and perspectives to include.</p>\n<p>Approach it as lining up rough consensus and then locking it in in the review.</p>\n"
	},
	"g48a31f22cb_0_25": {
	  "title": "Everyone will react negatively when surprised in high stakes",
	  "body": "<p>No one likes being surprised by information in a <card-link card=\"g487aed6370_0_181\">high-stakes environment</card-link>, especially if it not aligned with their previous knowledge or stated preferences.</p>\n<p>Being put on the spot in a big review unexpectedly, or being the last to learn about a thing that you should have already known about, will make almost everyone react negatively. Worse, one negative reaction can <card-link card=\"g48a31f22cb_0_20\">kick off negative reactions in others in a compounding cascade</card-link>.</p>\n<p>If at all possible, people should not be surprised by information in reviews. This is one of the reasons <card-link card=\"g48a31f22cb_0_20\">1:1s are great ways to derisk reviews</card-link>.</p>\n"
	},
	"g48a31f22cb_0_30": {
	  "body": "<p>The best leads often rely heavily on <card-link card=\"g48845643ff_0_403\">intuition</card-link>, and then the ability to dig into an idea to verify it. They draw on a an array of knowledge to find fuzzy pattern matches that might help in this problem space.</p>\n<p>The fuzzier the pattern, the potentially less predictive it is, but the more situations it can be applied to.</p>\n<p>If, once you’ve discovered a possible pattern to match against, you can distill those insights and verify they work, that’s great. Intuition is primarily about finding potential matches quickly.</p>\n<p>The more experience you have and the more you’ve learned, the more patterns you have to match against, <card-link card=\"g48845643ff_0_185\">which is a strong compounding loop</card-link>. <card-link card=\"g48a31f22cb_0_35\">Mentoring</card-link> is not just a good thing to do, as a bonus it’s a great way to get more patterns to match.</p>\n",
	  "title": "The best leads are strong fuzzy pattern matchers"
	},
	"g48a31f22cb_0_35": {
	  "title": "Mentoring is win-win-win",
	  "body": "<p>It’s a great way to have a strong positive impact on someone’s life.</p>\n<p>It’s a great way to force yourself to <card-link card=\"g48a31f22cb_0_40\">distill intuition to insights</card-link>.</p>\n<p>It’s a great way to get <card-link card=\"g48a31f22cb_0_30\">more patterns to match against</card-link>.</p>\n"
	},
	"g48a31f22cb_0_40": {
	  "title": "Talking helps distill intuition to insight",
	  "body": "<p>You have a fuzzy idea in your head, but you need to reify it to ensure it works, and also to verify it makes sense.</p>\n<p>Talking is fundamentally about modeling the other person’s mind and figuring the right string of words to say to get them to have a similar thought as you. That requires massive distillation. Often his distillation compresses an intuition into an <card-link card=\"g487aed6370_0_50\">insight</card-link>, which can then be captured and shared.</p>\n<p>If you don’t have someone to talk to, try talking to yourself. Exploratory document writing and brainstorming can be a great way to “talk” to yourself.</p>\n"
	},
	"g48a31f22cb_0_45": {
	  "title": "Agents are human-scale systems with intrinsic motivation",
	  "body": "<p>An <strong>agent</strong> is the way to describe an <strong>intrinsically motivated</strong> sub-system that is powered, ultimately, by humans. Intrinsically motivated means that without any external forces they will still move under their own power. Agents in practice often can mean <strong>individuals</strong>, <strong>teams</strong>, or <strong>ecosystems.</strong></p>\n<p>Different types of agents will have different amounts of intrinsic motivation and energy. The amount of energy is tied to how strong the incentive is, and how easy it is to align the internal forces to pull to the same outcome. For example, a small team of developers has high monetary motivation, and by being small is easy to get to pull in the same direction.</p>\n<p>Many of the same analysis for human-systems system theory <card-link card=\"g48845643ff_0_126\">applies for any human-scale system</card-link> with its own intrinsic motivation. Because of that, anywhere these cards might say 'humans' or 'people', we instead say 'agent' to make it more general. After all, <card-link card=\"c-747-aba947\">humans are agents</card-link>. Technically <card-link card=\"c-625-adc007\">agents need not be human-scale</card-link>.</p>\n"
	},
	"g48a31f22cb_0_50": {
	  "body": "<p>In complex spaces, <card-link card=\"g48845643ff_0_121\">things get exponentially fuzzier farther into the future</card-link>. It’s often easy to miss key constraints, <card-link card=\"g48845643ff_0_453\">designing a solution that no one actually wants</card-link>.</p>\n<p>You should have a long-term <card-link card=\"g487aed6370_0_81\">north-star</card-link> that you’re working towards, and take as <card-link card=\"g48845643ff_0_234\">long-term a perspective as your runway allows.</card-link> But a thriving solution is a system in equilibrium, and <card-link card=\"g48845643ff_0_155\">those are impossible to create in a lab</card-link>.</p>\n<p>Tear down your solution to the <strong>smallest thing that plausibly adds non-zero value in 6 months or less</strong>, while having a path to iteratively be built towards your north star.</p>\n<p>You can use then harness the energy of real-world demand<card-link card=\"g48845643ff_0_132\"> to help you prioritize</card-link> steps within your adjacent possible. Plus, there’s a good chance that the thing you designed will <card-link card=\"g487aed6370_0_161\">violate some hidden constraint</card-link>. See also <card-link card=\"g48845643ff_0_453\">the myth of infrastructure</card-link>.</p>\n",
	  "title": "Minimize time to adding initial value"
	},
	"g48a31f22cb_0_55": {
	  "title": "Cultures can be bottoms-up or tops-down",
	  "body": "<p>Organization cultures exist on a spectrum between tops-down and bottoms-up.</p>\n<p>The more top-down, the more predictable and merely complicated (although even these structures are more complex than they appear). These organizations are efficient but not very resilient.</p>\n<p>The more bottoms-up a culture is, the more emergent the behaviors, and the more the system can be thought of <strong>as an ecosystem</strong>. In these cultures, <card-link card=\"g487aed6370_0_281\">coordination is enormously expensive</card-link> and process is often not correlated with what’s actually happening, but the more resilient the organization is to unexpected shocks.</p>\n<p>The more bottoms-up your organization is, the more you should approach problems  by <card-link card=\"g487aed6370_0_40\">default as complex</card-link>.</p>\n"
	},
	"g48a31f22cb_0_61": {
	  "body": "<p>Metaphor is one of the most undervalued <card-link card=\"g487aed6370_0_116\">lenses</card-link>. It’s often seen as frivolous, fanciful, and overly abstract.</p>\n<p>But well-constructed metaphors are extremely powerful. The human brain thinks in terms of concrete stories and situations, and metaphors that capture the interesting underlying dynamics of a problem can nicely distill them to something that is more intuitive to grasp.</p>\n<p>Plus, sometimes inconvenient facts are easier to confront when they’re abstracted.</p>\n<p>Metaphors are a good way of extracting out the underlying pattern, which can then be <card-link card=\"g48845643ff_0_403\">matched more quickly to other situations</card-link>. Metaphors are a type of <card-link card=\"g48a31f22cb_0_72\">parallel</card-link>. They’re powerful for similar reasons as <card-link card=\"g48a31f22cb_0_66\">historical parallels</card-link>, but can be deployed even when there isn’t an obvious historical parallel.</p>\n",
	  "title": "Metaphor as a lens"
	},
	"g48a31f22cb_0_66": {
	  "title": "Historical Parallels as a lens",
	  "body": "<p>Historical parallels are previous experiences that have some fundamental parallel to the situation at hand. They can be used to help make predictions, or to find hidden constraints in your own problem space that are more clear in the historical example.</p>\n<p>These can be well-known historic events (accounts of famous battles are overly-prevalent examples), but they can also be drawing on your own personal experiences or experiences you heard about from someone else. This is one of the reasons <card-link card=\"g48a31f22cb_0_35\">mentoring is a win-win-win</card-link>.</p>\n<p>Historical parallels are a particular type of <card-link card=\"g48a31f22cb_0_72\">parallel</card-link>.</p>\n"
	},
	"g48a31f22cb_0_72": {
	  "title": "Parallels help uncover hidden constraints",
	  "body": "<p>Reduce an idea to its essence to make it easier to <card-link card=\"g48845643ff_0_403\">pattern match</card-link>.</p>\n<p>Find possible examples and think critically about whether they actually match the fundamental dynamics of this situation or not.</p>\n<p>If they do, look for adjacent parallels--perhaps a constraint is obvious in the parallel, but was not yet obvious in your own situation.</p>\n<p>Having a parallel also helps you consider multiple solutions at once, sometimes allowing you to factor out a shared, higher-level insight underlying them both.</p>\n<p><card-link card=\"g48a31f22cb_0_66\">Historical parallels</card-link> and <card-link card=\"g48a31f22cb_0_61\">metaphor</card-link> are two sub-classes of parallels.</p>\n"
	},
	"g4a3ed6c576_0_14": {
	  "title": "Game Theory as a lens",
	  "body": "<p>Game theory is a powerful <card-link card=\"g487aed6370_0_116\">lens</card-link>. Although game theory has a <card-link href=\"https://en.wikipedia.org/wiki/Game_theory\">formal, rigorous mathematical definition</card-link>, in practice ‘game theory’ means <strong>analyzing the interdependent incentives of </strong><strong><card-link card=\"g48a31f22cb_0_45\">agents</card-link></strong><strong> in a system</strong>.</p>\n<p>Incentives are one of the primary forces within an ecosystem, so mapping them out is an important way to understand it. Be careful to analyze what a self-interested agent would <em>actually </em>be incentivized to do, not what you <em>want </em>them to be incentivized to do. If a strategy requires agents to go against their incentives then it won’t work because it violates a constraint.</p>\n<p>Incentives are interdependent. When incentives align correctly, they can compound, creating <card-link card=\"g48845643ff_0_204\">gravity wells</card-link>. Ecosystem strategy is often about <card-link card=\"g48845643ff_0_95\">aligning short- and long-term incentives of agents</card-link>. Sometimes individual incentives align to a global outcome no one prefers, as in the <card-link href=\"https://en.wikipedia.org/wiki/Prisoner%27s_dilemma\">prisoner’s dilemma</card-link> and <card-link href=\"https://en.wikipedia.org/wiki/Collective_action_problem\">the collective action problem</card-link>. See also <card-link card=\"c_579_abc424\">complex adaptive systems</card-link>.</p>\n"
	},
	"g4a3ed6c576_0_19": {
	  "body": "<p>Simulation is one type of <card-link card=\"g487aed6370_0_116\">lens</card-link> for complex problem spaces. <card-link card=\"g4a3ed6c576_0_24\">Complex systems cannot be fully understood by human minds</card-link>.</p>\n<p>But setting up simulations and seeing how the evolve can help elucidate the underlying dynamics in the system and test them to see how they will handle new conditions. This approach is known as <card-link href=\"https://en.wikipedia.org/wiki/Agent-based_model\">agent-based modeling</card-link>.</p>\n<p>Design a model in any programming environment you’re familiar with, aiming to keep it simple. Test it on simple situations and see if the results match real-world outcomes. If they do, you can have confidence you have a good understanding of the inner workings.</p>\n<p>You can then try giving more exaggerated inputs to see how they respond. Beware, however, that with extreme-enough inputs the dynamics of a system can change, so predictions are valid only when they the conditions are similar to real-world ones.</p>\n",
	  "title": "Simulations as a lens"
	},
	"g4a3ed6c576_0_24": {
	  "body": "<p>Emergent systems have highly inter-depedent pieces with large amounts of irreducible complexity, that exhibit <card-link card=\"g4a3ed6c576_0_29\">nonlinear behaviors</card-link>.</p>\n<p>Human minds only have limited amount of space for rational analysis. The result is that we can analyze emergent systems only at the micro-level (the low-level rule sets that lead to the overall emergent behavior), or at the micro-level (the high-level properties that the system <em>tends</em> to have under certain conditions). But keeping in mind both the macro- and micro-level at once is impossible for humans.</p>\n<p>Economies, democracy, ecosystems, and deep-learned ML models all have this property.</p>\n<p>The best tool to understand them is often <card-link card=\"g4a3ed6c576_0_19\">simulation</card-link>--deferring to the computer to understand the details, and allowing quick experimentation and tinkering.</p>\n",
	  "title": "Emergent systems cannot be understood by human minds"
	},
	"g4a3ed6c576_0_29": {
	  "body": "<p>Most complex systems exhibit some kind of emergent behavior, where the behavior of the system is great than the sum of its individual parts, because the various parts interact in ways that can have non-linear relationship.</p>\n<p>This means that you cannot remove any part of the system and still have it exhibit the same behavior. This is one of the reasons why it’s <card-link card=\"g487aed6370_0_286\">tempting but dangerous to reduce out too much detail when trying to understand complex systems</card-link>.</p>\n<p><card-link card=\"g4a3ed6c576_0_29\">Human minds cannot understand emergent systems</card-link>.</p>\n",
	  "title": "Complex systems have emergent behavior"
	},
	"g4a3ed6c576_0_34": {
	  "title": "Critical User Journeys as a lens",
	  "body": "<p>Critical User Journeys (CUJ) are one <card-link card=\"g487aed6370_0_116\">lens</card-link> to understand a complex space. It focuses on a deep analysis of the task the user is trying to accomplish and how they tackle it.</p>\n<p>Building a solution to a critical user journey often has the <card-link card=\"g487aed6370_0_261\">wind at your back</card-link> because you’re solving a known user need. Note however that users often only can ask for incremental improvements that are very close to their current behaviors, ignoring slightly bigger steps within the <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> that might be possible because of new technologies or investments. If you don’t have a <card-link card=\"g487aed6370_0_81\">north-star</card-link> you’re building towards it’s just a random walk buffeted by user whims. CUJ are thus a useful lens for the finding <card-link card=\"g48a31f22cb_0_50\">short-term improvements to make</card-link>, but not good for strategic goals.</p>\n<p>Beware that by going too deep on use cases <card-link card=\"g4a3ed6c576_0_39\">you might not build the right connective tissue</card-link>, leading your solution to be worth less than the sum of its parts.</p>\n"
	},
	"g4a3ed6c576_0_39": {
	  "body": "<p>Neighboring use cases unlock value as people use the system in ways that cuts across them. This creates a strong compounding effect in platforms, especially since <card-link card=\"g4a3ed6c576_0_44\">developers tend to use platforms in ways you never expected</card-link>.</p>\n<p>If you go too deep and don’t make sure there’s connective tissue, you might end up creating islands who are only as useful as the sum of their parts instead of harnessing a compounding effect.</p>\n",
	  "title": "Going too deep can create non-compounding islands"
	},
	"g4a3ed6c576_0_44": {
	  "title": "Developers will use platforms in ways you didn’t anticipate",
	  "body": "<p>Developers have their own <card-link card=\"g48a31f22cb_0_45\">intrinsic motivatio</card-link>n to use a platform, and they’ll seek out points in the <card-link card=\"g487aed6370_0_0\">adjacent possible</card-link> on the platform that work for them--even if you didn’t realize those points worked.</p>\n<p>The first time you hear of a high-profile use case on your platform that is a surprise to you is a mark of success for a new ecosystem. It shows that there’s organic energy and momentum.</p>\n"
	},
	"g4a3ed6c576_0_49": {
	  "title": "Tools vs Services",
	  "body": "<p>Related to <card-link card=\"g4a41d8c468_1_17\">developers always wanting more control</card-link>.</p>\n"
	},
	"g4a3ed6c576_0_54": {
	  "body": "<p>Considering varying time-scales is one <card-link card=\"g487aed6370_0_116\">lens</card-link> that can be applied to complexity.</p>\n<p>In a complex problem space it’s important to keep an eye on <card-link card=\"g48845643ff_0_95\">the short- and long-term simultaneously</card-link>. Focusing just on the short-term leads to a random walk, whereas focusing ovelry on the long-term leads to exploring solutions with no plausible path from here to there.</p>\n<p>Often if the way forward isn’t clear in one time-scale, looking at a different time-scale can help clarify. For example, asking “where do we expect to be in 3 years” can often help elucidate where it makes sense to build infrastructure.</p>\n<p>Note also that <card-link card=\"g487aed6370_0_201\">one predictor of friction between teams</card-link> is when there’s a time-scale mismatch: one team is trying to fight fires, and another is trying to plan a utopia.</p>\n",
	  "title": "Varying time-scales as a lens"
	},
	"g4a3ed6c576_4_0": {
	  "body": "<p>Systems in equilibrium can generally continue under their own momentum and internal logic for long stretches of time.</p>\n<p><card-link card=\"g487aed6370_0_241\">Discontinuities</card-link> are large external shocks to a system. These external shocks can bend the internal logic of a system, potentially to the point where it breaks. At that point, the system descends into chaos. Sometimes that states is temporary and will reconfigure itself into a slightly new (but unpredictable) equilibrium. Sometimes the system is sufficiently different it can never reconfigure.</p>\n<p>Systems that can weather discontinuities are <card-link card=\"c-915-dbd615\">resilient</card-link>. That means they can <strong>bend farther without their internal loops breaking</strong>. As a general rule, <strong>the more </strong><strong><card-link card=\"g48a31f22cb_0_55\">top-down</card-link></strong><strong> and </strong><strong><card-link card=\"g487aed6370_0_306\">efficient</card-link></strong><strong> a system is, the less resilient</strong>.</p>\n",
	  "title": "Resilient systems can weather discontinuities better"
	},
	"g4a3ed6c576_4_5": {
	  "title": "Maneuvering room is important in complex systems",
	  "body": "<p>In complex systems the future is hard to predict, and as you learn more you might</p>\n<p>Corollary to teams need maneuvering room (possible dupe) and <card-link card=\"g487aed6370_0_86\">don't collapse the waveform</card-link></p>\n<p>Maneuvering room is the variance of possible choices you give yourself to work with; more can be confusing (more choices to make) but in uncertainty, you need a lot of space to make it more likely the proper choice is available to you.</p>\n"
	},
	"g4a3ed6c576_8_0": {
	  "title": "Most good ideas have some kind of compounding effect",
	  "body": "<p>Otherwise it never gets any cheaper or higher impact</p>\n<p>There are lots of (sometimes minor) compounding effects, like <card-link card=\"g487aed6370_0_20\">infrastructure</card-link></p>\n"
	},
	"g4a41d8c468_1_0": {
	  "title": "Accelerants make systems run hotter",
	  "body": "<p>Thriving systems have <card-link card=\"g48845643ff_0_191\">enablers</card-link> that make the loop fundamentally work, but accelerants can help make that loop run hotter. In general, accelerants <strong>reduce the lag in the main feedback loop, </strong>making the cause and effect more direct. A few examples:</p>\n<ul>\n\t<li><strong>Marketing</strong>, to reach customers who would value the service but don’t yet know about it</li>\n\t<li><strong>In product promotions</strong> - Make adjacent use cases have more of an affordance to use the feature more directly</li>\n\t<li><strong>Social</strong> - If you can get a social loop going on top of a compounding loop, it can spread more virally</li>\n\t<li><strong>Delight</strong> - Unexpected value, including of a kind the user didn’t know they wanted (e.g. cute mascots) , encourages them to keep searching for more.</li>\n</ul>\n"
	},
	"g4a41d8c468_1_12": {
	  "body": "<p>It’s not enough to show one threat reduces to another threat (e.g. <card-link href=\"https://www-users.cs.york.ac.uk/susan/joke/3.htm#boil\">the mathematician boiling water joke</card-link>).</p>\n<p>Because the amount of energy/motivation necessary to expend to use that vector matters hugely.</p>\n<p>If a nation state has physical access to your device you’re hosed, and everything reduces to that ultimately. But that doesn’t matter because the degree of energy required is what matters</p>\n<p>Threat models are not binary, they are a continuum.</p>\n",
	  "title": "Threat models should include how motivated attacker is"
	},
	"g4a41d8c468_1_17": {
	  "body": "<p>The global optimal for a platform often has developers using higher-level functionality to get the <card-link card=\"c-062-ebc209\">benefits of code reuse</card-link>.But developers rationally seek control at a layer lower than what they \"should\" in a globally rational system. This is for two main reasons.</p>\n<p>First, because&nbsp;<card-link href=\"https://thecompendium.cards/c-561-dab051\">using a higher-level API fundamentally requires giving up some control</card-link>If you use a higher-level API there is a reasonably good chance that your CEO comes to you and compels you to make a change that isn't possible on top of that API, and you're stuck. This likelihood that you are the first one to come across this use case is higher the less mature and battle-tested the API is, because there were fewer people over time to have possibly had that need. Using a lower layer API is akin to the developer increasing their option value for future requirements in their code.</p>\n<p>Second, because often the abstract benefits of using a properly-high-level API are hard to reason about, whereas the concrete benefits of more control are easier to reason about. It's hard to understand the benefits of, for example, accessibility or scrolling performance until you have to recreate them yourself and realize how much you need them.</p>\n",
	  "title": "Developers always want lower level control than is optimal"
	},
	"g4a41d8c468_1_22": {
	  "title": "A well layered platform aligns incentives best",
	  "body": "<p>Don’t have a huge jump downward if you need to peel back a layer</p>\n"
	},
	"g4a41d8c468_1_27": {
	  "body": "<p><card-link card=\"g48845643ff_0_95\">Aligning short and long term incentives is important, but hard</card-link>.</p>\n<p>Sometimes developers don’t have a specific strong incentive, but have a default tend to zig or zag consistently. In those cases a guard rail can help divert the energy to the correct default.</p>\n<p>But if the incentive is too strong, not only will the energy hop the guardrail, but it might <card-link card=\"g48845643ff_0_244\">go to an even worse place (and with more momentum) than it was going before</card-link>.</p>\n<p>Examples are taking their energy <card-link card=\"g4a7499c914_0_0\">towards another thing for a compounding bonus they should want but don’t care about</card-link>--yet.</p>\n",
	  "title": "Guardrails sometimes align short and long-term incentives"
	},
	"g4a41d8c468_1_37": {
	  "title": "Configuration options constrain future maneuvering room",
	  "body": "<p>Configuration options interact in a matrix of conditions to consider and test. The cost of the goes up exponentially with number of config options, and <card-link card=\"g4a41d8c468_1_42\">deprecation is very expensive</card-link>.</p>\n<p>So it can feel like being responsive to concrete demand in the moment, but the long-term cost is substantial. With good design you can often cover most of the important cases with a minimum-spanning set of options.</p>\n<p>Corollary of why a well-layered platform is so useful, and that <card-link card=\"g4a85094c68_0_60\">giving too much control to developers is constraining</card-link></p>\n"
	},
	"g4a41d8c468_1_42": {
	  "body": "<p>Especially for developer features.</p>\n<p>Worst case is non-compounding or flat usage from a small number of heavy users</p>\n<p>Deprecation erodes trust in your future offerings that they won’t also be deprecated</p>\n",
	  "title": "Deprecation is way harder than launching"
	},
	"g4a41d8c468_1_47": {
	  "body": "<p>It might seem that <card-link card=\"g48a31f22cb_0_45\">agents</card-link> will make rational decisions that are aligned with their long-term interests.</p>\n<p>But in many cases, the short-term considerations <em>dominate </em>the decision, especially when the long-term value is theoretical, abstract, or hard to measure. In practice, if the long-term value is any of these things, it has to be an order of magnitude larger than the short-term value to outweigh it. Related to developers <card-link card=\"g4a41d8c468_1_17\">always want more control</card-link>.</p>\n<p>The reasons for this preference is based on, among other things, <card-link href=\"https://en.wikipedia.org/wiki/Prospect_theory\">prospect theory</card-link>, the fact that far enough into the future <card-link card=\"g48845643ff_0_234\">you may have run out of runway anyway</card-link>, <card-link card=\"g487aed6370_0_55\">a preference for concrete detail</card-link>, and others.</p>\n",
	  "title": "Agents give too much weight to short-term considerations"
	},
	"g4a41d8c468_1_52": {
	  "title": "Heavily constrained problems often have no big solutions",
	  "body": "<p>The more mature ,stable, large, and ossified the ecosytem is, the more the web of inter-related constraints, the more likely there isn’t a big, bold project or launch that could have huge impact without violating a constraint. (For example, entrenched but powerful interests may resist a change that disempowers them)</p>\n<p>Instead, you’ll need to focus on ideas with compounding leverage over time, which are boring.</p>\n<p>Hard to prove a negative, especially to leadership.</p>\n"
	},
	"g4a41d8c468_1_57": {
	  "title": "Power is option value for future actions",
	  "body": "<p>A power differential or influence point is useful not because you <em>must </em>use it, but because it is option value on actions that otherwise wouldn’t be in your adjacent possible.</p>\n<p>If it’s not too expensive, and there’s high EV (small chance of huge impact, or large chance of shallow impact), then it can be worth it to invest in the capabilitiy.</p>\n<p>Corollary of the compounding effect of infrastructure.</p>\n<p>See also <card-link card=\"c_625_ffb204\">power as an ability to get things done in a system</card-link>.</p>\n"
	},
	"g4a41d8c468_1_62": {
	  "body": "<p>In a space, the top player often has a (plausible) play at some aggregation effect, which is really useful.</p>\n<p>The second player (and sometimes the third) think they can <em>become </em>the first.</p>\n<p>But everyone else sees they’ll never be number 1, and a better play is to pitch in together in a way that at least <em>no one </em>can control fully.</p>\n<p>That means that it often makes sense to start low and work your way up, building a gravity well.</p>\n",
	  "title": "The incentives of #1 and #2 are different than the rest"
	},
	"g4a41d8c468_1_67": {
	  "title": "The top dog rarely wants to standardize",
	  "body": "<p>Corollary of open/standards as commodification, and the i<card-link card=\"g4a41d8c468_1_62\">ncentives of number 1 are different</card-link>.</p>\n"
	},
	"g4a41d8c468_1_7": {
	  "title": "Starting with an allowlist makes solutions unscalable",
	  "body": "<p>When you're just getting started, you want to do the smallest possible thing that adds value. In many cases that means that instead of creating a scalable, automated system to rank content, for example, it's much easier to do a allowlist of manually-vetted content. But <strong>allowlists are fundamentally unscalable and extremely difficult to wean yourself off of</strong>.</p>\n<p>Allowlists are fundamentally unscalable because they imply a linear effort per unit content, where the effort must come from your organization (as opposed to <card-link card=\"c-569-bde898\">being crowd-sourced</card-link>). That makes them <card-link card=\"c-953-acb518\">inherently unscalable, which means they are a bad strategy</card-link>. This is an example of the <card-link card=\"c-717-dac130\">Myopic Trap</card-link>.</p>\n<p>They are also hard to wean yourself off of. At every timestep, the effort to simply add a new item to the list is always <em>significantly</em> cheaper than the work to create an automated solution, which makes it more likely that you or the organization opt for the short-term approach. Worse, typically you work through the whitelist from biggest-bang items to smaller impact items, which makes the <card-link card=\"c-256-bcf995\">sum of the long-tail appear to get smaller and smaller over time</card-link>.</p>\n"
	},
	"g4a41d8c468_1_72": {
	  "body": "<p>True in systems theory in general.</p>\n<p>Will lead to over-corrections and oscillation</p>\n",
	  "title": "Long or indirect feedback loops lead to oscillation"
	},
	"g4a41d8c468_1_77": {
	  "title": "Ignoring emotions in feedback leads to confirmation bias",
	  "body": "<p>If you think that everyone is giving you 100% honest feedback to you (or your team’s) face all of the time, you’re probably wrong, especially if you’re powerful. Corollary of privileged have more confirmation bias, because nobody <em>wants</em> to need feedback.</p>\n<p>Giving feedback when stakes are high is hard, and often the calculation of value of chance for retribution is higher than the EV of feedback being received, so people don’t do it.</p>\n<p>Allowing anonymous or low-stakes feedback is critical, if nothing else to help be a barometer of how deeply you need to dig.</p>\n<p>Related to transparency is in <card-link card=\"g4a9e93532f_0_5\">tension with candor</card-link>.</p>\n"
	},
	"g4a41d8c468_1_82": {
	  "title": "Invest energy to meet energy",
	  "body": "<p>In an ecosystem, motivated actors will often search the adjacent possible for you.</p>\n<p>You should invest energy to meet the observed energy you see (possibly a bit more). If there are compounding effects from a good PMF, that can lead to investing in the right options to maximize impact with finite resources.</p>\n<p>Corollary of respond to concrete demand.</p>\n<p>This can also take the form of investing in things that have proven to be successful, like a <card-link card=\"c-481-dba603\">predictive model</card-link>.</p>\n"
	},
	"g4a41d8c468_1_87": {
	  "body": "<p>Complexity takes 10x more time and energy to dig into than complicated spaces.</p>\n<p>But often it’s worth it. Sometimes you don’t have a choice--the problem you are tasked with tackling is complex. But often complex system’s inter-linked nature means they’re rife with possibilities for compounding loops, which if you can harness them is totally worth it.</p>\n",
	  "title": "Complexity is (often) worth it"
	},
	"g4a41d8c468_1_92": {
	  "body": "<p>The <card-link href=\"https://en.wikipedia.org/wiki/Butterfly_effect\">butterfly effect</card-link> in famous,  but the popular understand is misleading.</p>\n<p>The fact that that precise outcome was kicked off by that one butterfly’s wing flapping is both true and distracting. Because had that butterfly not flapped its wings just so, something similar likely would have happened for different reasons.</p>\n<p>In systems, you should <card-link card=\"g48845643ff_1_45\">analyze the system that creates the potential for outcomes, more than the details of the individual</card-link>, which is often just a random collection of happenstance.</p>\n<p>The thing to observe is that the system created conditions where an outcome within some region of probability was a near certainty; the precise point that was the outcome is not interesting.</p>\n",
	  "title": "The randomness of details: the butterfly effect"
	},
	"g4a5429b3f0_0_0": {
	  "title": "Maneuvering room is the size of your adjacent possible",
	  "body": "<p>In complex spaces, you need maneuvering room to give you space to identify next actions that are both good ideas in the short term and align with your north star.</p>\n<p>Your maneuvering room is the size of your adjacent possible.</p>\n"
	},
	"g4a6111ef7e_0_0": {
	  "title": "Compounding metrics are nearly always meaningful",
	  "body": "<p>In general, it’s good to <card-link card=\"g48845643ff_0_514\">set your success and kill criteria early</card-link>, before everyone gets into the thick of it and their judgement gets biased.</p>\n<p>There’s one (minor) exception: if you find a truly <card-link card=\"g48845643ff_0_296\">compounding metric</card-link>, in <em>any</em> metric with a plausible connection to a clear success or failure case, then you should take it seriously.</p>\n<p>Compounding effects only happen if there’s some <card-link card=\"g48845643ff_0_167\">feedback loop</card-link>, and finding those feedback loop needles amongst the haystack of ideas is so rare that if you find one that looks like one, take it seriously and dig in to understand the loop.</p>\n"
	},
	"g4a6111ef7e_0_10": {
	  "body": "<p>Creating a <card-link card=\"g48845643ff_0_204\">gravity well</card-link> effect is most likely when you have 1) a truly open source project that is open from day one, which creates the underlying <em>potential </em>for a gravity well.</p>\n<p>But in practice the thing that is the single best predictor of an open source gravity well is when <strong>two independent big players invest engineering effort into the project</strong>.</p>\n<p>That demonstrates that the project is unlikely to be controlled by a single powerful entity, and also that the biggest discontinuity in the path to gravity well (another big player participating) has been crossed.</p>\n<p>Related to <card-link card=\"g4a41d8c468_1_62\">the incentives of the top players is different than the rest</card-link>.</p>\n",
	  "title": "Gravity wells are most common when two big players join in"
	},
	"g4a6111ef7e_0_15": {
	  "body": "<p>Open source in some ways does, because it’s possible to fork if the project goes too far in the wrong direction, but forking is expensive.</p>\n<p>Far more important are the power dynamics within the organization. Open projects have open governance, where the amount of power in the repo is proportionate to the amount of time and value that person has invested in the project.</p>\n<p>The most concrete test is: “<strong>If someone were to invest half a year of good quality work into the project, would they gain committer status?</strong>”</p>\n<p>Another test is if the work or organizing and designing the project is conducted in public documents and bugs, or if only the code is public. The former is way easier to fork, which has a nice balancing effect.</p>\n",
	  "title": "Open Source does not necessarily mean open"
	},
	"g4a6111ef7e_0_20": {
	  "body": "<p>An extreme version of <card-link card=\"g48a31f22cb_0_10\">minimizing discontinuities</card-link> when trying to create a <card-link card=\"g48845643ff_0_204\">gravity well</card-link> open source project.</p>\n<p>Think of the moment the project flips from private to public as a <card-link card=\"g48845643ff_0_519\">launch</card-link>. The project will start being developed in a new way. Will it be a truly open source project, or open code only? Will the project encourage participation and discussion from others, or shun it? Were any of the design decisions made to date incorrect and based on a poorly understood problem space? At that moment it’s impossible to tell.</p>\n<p>If the project is open from the beginning, other participants  can meaningfully participate in decision decisions if they choose, and the <card-link card=\"g4a6111ef7e_0_15\">bugs/designs/etc are more likely to be public and real</card-link>.</p>\n",
	  "title": "Open-source-from-first-commit minimizes discontinuities"
	},
	"g4a6111ef7e_0_25": {
	  "title": "Public discussion lists are good accelerants",
	  "body": "<p>Ecosystems have <card-link card=\"g48845643ff_0_191\">enablers and accelerants</card-link>.</p>\n<p><strong>Any project with motivated users</strong> (all developer offerings, most creative tools, a number of other product types) <strong>will have meaningful acceleration of the core loop with a thriving public discussion list</strong>. It has its own compounding effect. See also <card-link card=\"c_455_deb915\">focal points can inspire</card-link>.</p>\n<p>There are a few reasons this works:</p>\n<ul>\n\t<li><strong><span class=\"small\">More moments</span></strong><span class=\"small\"> - Each email people get has some chance of inspiring them to engage more. At the very least it’s a reminder the project exists on a regular basis.</span></li>\n\t<li><strong><span class=\"small\">Inspiration</span></strong><span class=\"small\"> - The things others do will often inspire people to use the product in new ways</span></li>\n\t<li><strong><span class=\"small\">Community</span></strong><span class=\"small\"> - The </span><span class=\"small\"><card-link card=\"g4a6111ef7e_0_30\">stronger a community is, the lower the risk the project is</card-link></span><span class=\"small\">. A thriving mailing list is a direct indicator of the health of the community, so it makes a </span><span class=\"small\"><card-link card=\"g4a6111ef7e_0_35\">trustworthy signal</card-link></span><span class=\"small\">.</span></li>\n</ul>\n<p>You can get these lists going--encouraging people to engage actively and supportively--with <card-link card=\"g48845643ff_0_554\">ringers</card-link>.</p>\n"
	},
	"g4a6111ef7e_0_30": {
	  "body": "<p>When people decide to use a project, they’re taking a bet that the project will continue to at the very least continue to be maintained. This bet scales with the size of the project riding on it--up from a quick personal hobby project all the way up to $100M+ businesses. Projects with thriving communities are much safer bets.</p>\n<p>It’s tempting to dismiss this as mere herd mentality, but it’s more. For a few reasons:</p>\n<ul>\n\t<li><strong><span class=\"small\">Trustworthy signal</span></strong><span class=\"small\"> - The signal is hard to fake, making it </span><span class=\"small\"><card-link card=\"g4a6111ef7e_0_35\">trustworthy</card-link></span><span class=\"small\"> as an indication of project utility</span></li>\n\t<li><strong><span class=\"small\">More documentation and tools</span></strong><span class=\"small\"> - The more people using the project, the more likely there is to be good tutorials, good coverage on stack overflow, more tools designed to work with it, etc</span></li>\n\t<li><strong><span class=\"small\">Less risk - </span></strong><span class=\"small\">The chance that the project becomes unmaintained is lower, because it could be </span><em><span class=\"small\">any </span></em><span class=\"small\">motivated community member, and there are a lot of them. Also, if forking is necessary, the combined wisdom and knowledge in the heads of the broader community makes a </span><span class=\"small\"><card-link card=\"g4a6111ef7e_0_40\">successful fork</card-link></span><span class=\"small\"> more likely.</span></li>\n</ul>\n",
	  "title": "Projects with thriving communities are safer bets"
	},
	"g4a6111ef7e_0_35": {
	  "title": "Trustworthy signals are hard to fake",
	  "body": "<p>A signal should be a) correlated with the underlying thing it’s meant to be a signal of, and b) impossible (or at least prohibitively expensive) to fake.</p>\n<p>The concept comes from evolutionary biology, but applies in any game-theoretic scenario.</p>\n<p>In game theory scenarios where trust must be earned, trustworthy signals carry the most weight.</p>\n<p>Related to the <card-link card=\"c-240-dee641\">handicapping principle</card-link>.</p>\n"
	},
	"g4a6111ef7e_0_40": {
	  "title": "Ability to successfully fork is a measure of openness",
	  "body": "<p>When making a decision to use a project, a developer needs to assess the likelihood the project ceases to be maintained at some point in the future. One of the useful signals is, in the worst case, how hard would it be to successfully fork the project?</p>\n<p>That is, if any single entity went incompetent, lazy, or evil--even if it was the owner of the project--could you mitigate that risk?</p>\n<p>Some of the things that make a project more likely to be forkable:</p>\n<ul>\n\t<li><strong><span class=\"small\"><card-link card=\"g4a6111ef7e_0_20\">Open from first commit</card-link></span></strong><strong><span class=\"small\"> </span></strong><span class=\"small\">-- The entire history of the project is visible</span></li>\n\t<li><strong><span class=\"small\"><card-link card=\"g4a6111ef7e_0_15\">Design docs and bugs are open </card-link></span></strong><span class=\"small\">- The history of all of the design decisions and their rationale is public</span></li>\n\t<li><strong><span class=\"small\"><card-link card=\"g4a6111ef7e_0_30\">Thriving community</card-link></span></strong><span class=\"small\"> - There are lots of people in the community who have developed knowledge (and motivation) and would be happy to help, and collectively have the expertise necessary</span></li>\n</ul>\n"
	},
	"g4a6111ef7e_0_45": {
	  "body": "<p><card-link card=\"g487aed6370_0_251\">Everything is in balance</card-link>, and almost every good thing is in tension with some other good thing.</p>\n<p>Certain <card-link card=\"g48845643ff_0_377\">types of challenging topics are hard to discuss in public</card-link>. <card-link card=\"g4a6111ef7e_0_45\">Certain types of constraints</card-link> (especially about specific individuals) are subtle, or potentially embarrassing. A good idea, especially in a complex system, <card-link card=\"g487aed6370_0_161\">satisfies all salient constraints, even ones that aren’t known or acknowledged</card-link>.</p>\n<p>Transparency is <em>often </em>good, but like all things, there are downsides of going too far, and what’s important is finding the right balance point.</p>\n",
	  "title": "Transparency is not always good"
	},
	"g4a6111ef7e_0_5": {
	  "body": "<p>In complexity, <card-link card=\"g48845643ff_0_121\">the future gets exponentially more fuzzy</card-link>. If you build a solution without <card-link card=\"g48a31f22cb_0_50\">concrete demand</card-link>, the likelihood you build a thing that is actually useful (and doesn’t violate a previously unknown constraint) is slim.</p>\n<p>Often solutions farther out need to resolve lots of unresolvable questions to move forward. Searching for those solutions is extremely expensive, distracting, and very unlikely to actually find a good solution.</p>\n<p>If the problem isn’t important now, but the dynamics of the problem space mean the problem won’t get any <em>harder </em>to solve later, you should table it. Also look for opportunities to factor out useful infrastructure that will be useful for that solution, but also many others, today, <card-link card=\"g487aed6370_0_20\">building a compounding effect</card-link> that might make the problem even easier to tackle in the future.</p>\n",
	  "title": "Tackling a problem too early is 10x more expensive"
	},
	"g4a6111ef7e_0_50": {
	  "title": "Finding PMF is searching for a needle in a haystack",
	  "body": "<p>Product Market Fit (PMF) is another word for a discovered compounding loop in a company’s adjacent possible space.</p>\n<p>These loops are hard to find and somewhat rare.</p>\n<p><card-link card=\"g4a6111ef7e_0_0\">If you find a compounding loop in any of your metrics, take it seriousl</card-link>y.</p>\n"
	},
	"g4a7499c914_0_0": {
	  "body": "<p>When aligning short and long-term incentives, often you can have something that is useful to people in the short term, with a (non-zero) bonus that isn’t why people do it, but is nice to have.</p>\n<p>If the bonus has a compounding effect <card-link card=\"g48845643ff_0_204\">gravity well</card-link>, then over time that “bonus” reason can become the primary motivator. And if it doesn’t, you’re still adding value.</p>\n<p>Related to medium-grained lumpy goods in economics. The agent got the thing they wanted, plus a bonus that cost them nothing. But now that they have it, any value they get is free, and can compound.</p>\n",
	  "title": "Aligning incentives: what starts as a bonus becomes primary"
	},
	"g4a7499c914_0_10": {
	  "title": "If you have informal authority, acting like it can give you more",
	  "body": "<p>Informal authority is impossible to measure, but can be extremely important, especially in a bottoms- up org.</p>\n<p>If you have informal authority, <em>act </em>like it--confidently participate in discussions and apply nudges. If the nudges work, and people see that they work, then that will give you more informal authority, in a kind of self fulfilling prophecy.</p>\n<p>Obviously you should never extend your informal authority farther than it goes; this effect is mild compared to earning credibility the main way.</p>\n<p>A reverse corrolary of over-extending informal authority erodes it.</p>\n"
	},
	"g4a7499c914_0_15": {
	  "title": "Success begets success",
	  "body": "<p>Remember to generally focus on the system and context more than the individual.</p>\n<p>When you have success, that generally means you now enjoy a better position with better outcomes in your adjacent possible--an effect that compounds. If you’re good enough and don’t make active mistakes, this can keep compounding. Over time it can be easy to forget that it comes, ultimately, from luck.</p>\n<p>Privilege is one way of understanding the luck of your starting hand.</p>\n<p>But never forget that fundamentally it’s the system + good enough baseline characteristics + random luck, and that doesn’t make you a better person than people that weren’t lucky.</p>\n"
	},
	"g4a7499c914_0_20": {
	  "body": "<p>Passion is an extraordinary motivating force for individuals and teams, where it exists.</p>\n<p>But one downside of passion is that because it’s such an over-riding obvious thing for the person who has it, their answer is often to try to get <em>others </em>to be passionate about the thing they’re passionate about. And when others don’t get passionate about the same things, the most obvious thing is to try <em>harder </em>to get them passionate. But that can erode credibility over time, and make you increasingly blind to better approaches.</p>\n<p><strong>Assume that others will never be passionate about the things you’re passionate about</strong>--that it’s only powerful to you for some random reason<strong>.</strong> That will help reveal more sustainable solutions that are good ideas on their own, and as a bonus line up with your passion, giving you more sustainable energy. Corrolary of not trying to build intrinsic motivation in others.</p>\n",
	  "title": "Passion blinds you to more sustainable solutions"
	},
	"g4a7499c914_0_26": {
	  "title": "Teams motivated by passion become more passionate",
	  "body": "<p>If you have a charismatic leader who is <card-link card=\"g4a7499c914_0_20\">passionate</card-link> about something, the team itself will tend to get more passionate over time, too.</p>\n<p>This is not because people surrounded by people who are passionate about something tend to beocme passionate themselves (although that is a minor factor). It’s primarily because over time people who are already passionate about the same thing will be more likely to join the team--and people who are passionate will be more likely than the average person to <em>stay </em>on the team. The more passionate a team is collectively, the more likely that people who are <em>not </em>passionate will not feel compelled to stay.</p>\n<p>The net result is a team who is consistently and deeply passionate. That also means that if they <card-link card=\"g4a7499c914_0_31\">experience a setback it can be catastrophic</card-link>.</p>\n"
	},
	"g4a7499c914_0_31": {
	  "body": "<p>Passion is an amazingly powerful intrinsic motivator, <card-link card=\"g4a7499c914_0_20\">but it’s not without its downsides</card-link>.</p>\n<p>One additional one is that passion is a motivator that is at the very core of people’s identities. Whereas the vast majority of projects people work on are things those people have come to care about as they’ve invested in the team and sunk energy into it, passion is intrinsic.</p>\n<p>That means that when a <card-link card=\"g4a7499c914_0_26\">deeply passionate team</card-link> experiences a significant setback that conflicts with their passion--the team is down-sized, split, or told to work on something else--the effect, instead of being a headwind, can be catastrophic and can shake people to their very core.</p>\n<p>When looking at reorgs, leads often miss the depth of passion on a team and signifiantly under-estimate the shock it will cause.</p>\n",
	  "title": "Setbacks for passionate teams are crushing"
	},
	"g4a7499c914_0_36": {
	  "title": "New mediums unlock new insights",
	  "body": "<p>They allow the human brain to off-load new types of thoughts, connections, calculations, and represent them in a different form.</p>\n"
	},
	"g4a7499c914_0_42": {
	  "title": "Benchmarks distill complexity to something measurable",
	  "body": "<p>Making things that are otherwise impossible to compare comparable.</p>\n<p>But beware, Goodhart’s law applies even more strongly if competitive agents will compete strongly to win.</p>\n"
	},
	"g4a7499c914_0_47": {
	  "body": "<p>Teams that are passionate about somethin<card-link card=\"g4a7499c914_0_26\">g tend to become more passionate over time</card-link>. But almost with certainty, the broader organization they’re i<card-link card=\"g4a7499c914_0_20\">n doesn’t share the same passion</card-link>.</p>\n<p>As teams get more and more passionate, it isolates them from the broader team. Within the sub-team, the feeling grows and multiplies that the broader team “just doesn’t get it”. And within the broader team, the feeling grows and multiplies that the sub-team is “in their little corner”, focused on the wrong things, and hard to work with (because they insist on seeing everything through the lens of their passion). This effect compounds as distrust builds, and can lead to a point where the team is reorged to “fix it”, which <card-link card=\"g4a7499c914_0_31\">can be catastrophic for passionate teams</card-link>.</p>\n",
	  "title": "Passionate teams isolate themselves"
	},
	"g4a7499c914_0_5": {
	  "body": "<p>They’re rare. And if you’re searching for them, you’ll miss the solid solutions that don’t violate any constraints and have compounding effects.</p>\n<p>Searching for big bold bets is a wild goose chase. And verify that it’s not just a fear of complexity motivating you to search for one instead of embracing complexity.</p>\n<p>And if there ARE big bold bets, then you’ll still likely come across them, because you understand the space better and know the constraints.</p>\n",
	  "title": "In complexity, assume there aren’t any big bold bets"
	},
	"g4a85094c68_0_0": {
	  "body": "<p>The world isn’t perfect. There are all kinds of constraints that ideally wouldn’t be there or that are embarrassing or dispiriting. The incentives of system often align so that the outcome no one prefers is the default.</p>\n<p>The <card-link card=\"g4a85094c68_0_5\">perfect outcome doesn’t exist</card-link>. But it’s no use getting cynical about it.</p>\n<p>The pragmatic optimism outlook is that the world isn’t perfect and it never will be. But over long-enough timescales it tends to get better, and we can make deliberate decisions that compound to make it <strong>much </strong>better.</p>\n<p>Pragmatic optimism is necessary to tackle complex problem spaces.</p>\n",
	  "title": "Pragmatic optimism vs cynical idealism"
	},
	"g4a85094c68_0_10": {
	  "body": "<p>Leads should operate more and more by applying nudges.</p>\n<p>If a lead is gone for up to 2 weeks, no one should notice.</p>\n<p>If a lead is gone for between 2-4 weeks, questions on which decision to make should start accumulating.</p>\n<p>Between 4-6 weeks, the wheels should start wobbling in the project.</p>\n<p>If this doesn’t happen, there’s a chance that the lead is attempting (and likely failing) to lead via heroism</p>\n",
	  "title": "Vacations for leads should be a blip"
	},
	"g4a85094c68_0_15": {
	  "title": "Attempting to lead via heroism builds unsustainable teams",
	  "body": "<p>Heroism in general is unsustainable. Leads should attempt to lead in complex spaces via nudges.</p>\n<p>But it’s hard to let go of details. Often leads say they want to delegate but only want to delegate execution, not strategy.</p>\n<p>If the lead is the decider, it can build a team that is unable to lead themselves, or to develop the skills to be comfortable in autonomy. It’s also likely that those teams will not be able to effectively dissent, making it more likely the team is pursuing bad ideas.</p>\n<p>If as a lead you <card-link card=\"g4a85094c68_0_10\">can’t take a vacation without the team derailing</card-link>, that’s a sign you’re attempting to lead via heroism.</p>\n"
	},
	"g4a85094c68_0_20": {
	  "body": "<p>Recursion appears at first to be non-intuitive: it requires a leap of faith that the recursion will complete and give the right answer.</p>\n<p>Trusting recursion will complete requires 1) ensuring that the base case is reached, 2) that any problem gets progressively smaller towards base case, and 3) that each inductive step is correct. If those are true, intuitively trusting recursion is letting go of doubt.</p>\n<p>Understanding systems intuitively is the same. Identify the large scale trends and forces. Verify that they’re converging, to a rigorous and plausible north-star. And then let go.</p>\n",
	  "title": "Understanding systems is like understanding recursion"
	},
	"g4a85094c68_0_25": {
	  "body": "<p>Motivated agents will search an adjacent possible.</p>\n<p>VC funding is predicated on blockbusters: support many different startups, and figure that one of them will win and win big to cover all of the investment.</p>\n<p>VC funding is an emergent property in an economy, but similar approaches can happen internally (just at a much smaller scale, meaning the approach is mathematically less sound).</p>\n<p>Remember <card-link card=\"g4a85094c68_0_30\">finding PMF is winning the lottery;</card-link> you need to be able to buy enough lottery tickets, and the return for the blockbuster has to be high enough, for it to be a sound investment strategy.</p>\n",
	  "title": "VC funding is crowdsourcing search in the adjacent possible"
	},
	"g4a85094c68_0_30": {
	  "body": "<p>Finding a thriving engine is really hard, and most possible engines aren’t viable.</p>\n<p>When you find PMF, you’ll find compounding growth.</p>\n<p>But it’s a needle in a haystack.</p>\n<p>Finding PMF is like winning the lottery. There are patterns of investment that make it sound, but in general even if you buy 10 lottery tickets it’s still not a good investment.</p>\n",
	  "title": "Finding PMF is winning the lottery"
	},
	"g4a85094c68_0_35": {
	  "title": "Leads should repeat their north star ad nauseum",
	  "body": "<p>Ensures that the team is sighting off it, while giving them autonomy to make local decisions.</p>\n<p>Beware, though, not giving the team space to develop their own north-stars within sub-problems (because if they don’t then they won’t develop the ability to on their own which is in and of itself a form of unsustainable heroism)</p>\n"
	},
	"g4a85094c68_0_40": {
	  "body": "<p>Certain types of problems have intrinsic energy once the agent gets going--for example an individual working on their hobby project.</p>\n<p>However, even if you want to work on your project on a rainy sunday, you need to get going from a stand still, to load up all of the working state into your brain. Once you do you’ll have <card-link card=\"g4a85094c68_0_45\">unstoppable momentum</card-link>. <strong>But overcoming that activation energy can be nearly impossible</strong>.</p>\n<p>If you break up your problem to allow incremental work even in short bursts, you’ll reduce the activation energy as much as possible, allowing the momentum to dominate. Document your next steps, reasoning, and design in GitHub issues. Leave some low-hanging fruit clean-up tasks that are easy to start and can give you some momentum.</p>\n",
	  "title": "Allowing incremental work minimizes activation energy"
	},
	"g4a85094c68_0_45": {
	  "title": "The flow state is like a drug",
	  "body": "<p>The flow state is an amazing motivator for individuals--nearly limitless energy, sustainably. <card-link card=\"g48845643ff_0_138\">Harnessing it is one of the secrets to scale</card-link>, and it’s a wonderful thing.</p>\n<p>But there is a dark side--that momentum, when it’s running really hot, can distract you from other things you should be doing, like spending time with family, exercising, doing mundane chores, etc.</p>\n<p>Flow state, when it’s at its strongest, has some properties in common with drug addiction.</p>\n<p>Respect the power of flow state: build structure to force yourself to come up for air or time-box the amount of time you’re in flow state.</p>\n"
	},
	"g4a85094c68_0_5": {
	  "title": "The perfect option doesn’t exist",
	  "body": "<p>The perfect is the enemy of the good.</p>\n<p>But in complex systems, even farther: <strong>the perfect option doesn’t exist</strong>. Perfect as balancing of forces that are in tension. Fast/Cheap/Good. If you’re searching for the perfect option, you’re probably just clinging to the search for a big bold bet because you’re afraid of complexity.</p>\n<p>Embrace complexity.</p>\n"
	},
	"g4a85094c68_0_50": {
	  "body": "<p><card-link card=\"g4a85094c68_0_45\">Flow state can run away and become a problem</card-link>.</p>\n<p>If you know that a certain type of problem or work will suck you in and it will be difficult to come up for air, expanding to take all space available, structure your day with <card-link card=\"g48845643ff_0_90\">black-and-white rules</card-link> about when you’ll stop, no matter what.</p>\n<p>For example, “after the commute I won’t open my work computer” or “no working on my hobby project after lunch on the weekend”</p>\n",
	  "title": "Time-box your flow state"
	},
	"g4a85094c68_0_55": {
	  "body": "<p>Once you give them flexibility / control, reducing it is extremely hard. It takes time, needs a powerful carrot and a powerful stick</p>\n<p>The lower level the control you give, the harder it is to combine 3P content together</p>\n<p>In the PMF environment, tempting to give away tons of control to developers to get them to participate, but that ceded control <card-link card=\"g4a85094c68_0_60\">heavily constrains possibilities.</card-link> It’s way better to find some developers who are incentivized to participate (perhaps for a <card-link card=\"g4a7499c914_0_0\">bonus that later becomes a primary motivator</card-link>) if you can get a <card-link card=\"g48845643ff_0_204\">gravity well</card-link> effect going.</p>\n",
	  "title": "Once given, it’s hard to reduce control of developers"
	},
	"g4a85094c68_0_60": {
	  "title": "The more control given to developers, the harder to combine",
	  "body": "<p>If you need to execute script to see what the content “is”, then whether the content is good/well-behaved reduces to the halting problem. The messier the content, the harder it is to inter-link, compose, etc, vastly constraining what can be done with it.</p>\n<p>Related to <card-link card=\"g4a85094c68_0_55\">control is hard to wrest away from developers once given</card-link></p>\n<p>Sometimes framed as <card-link card=\"c-513-fdf108\">declarative vs imperative</card-link>.</p>\n"
	},
	"g4a85094c68_0_65": {
	  "body": "<p>If you have an engine going, the energy flowing through can be harnessed to do useful work. In an engine that energy usually goes to inspire <em>more </em>energy, in a compounding effect.</p>\n<p>But you can also use that energy, combined with a point of influence, to monetize.</p>\n<p>But that energy that is extracted from the system can’t be used to do other (possibly compounding) work. If you extract too much, you can break the engine. The dynamics are similar to overfishing. Think of trading off money now for high opportunity cost of future money.</p>\n<p>If you have an engine and a given amount of money you want to extract, it’s better to let the engine run hotter and extract a relatively smaller proportion of the total energy instead of over-extracting too early.</p>\n",
	  "title": "Monetization is extractive of energy"
	},
	"g4a85094c68_0_75": {
	  "body": "<p>When you’re in a PMF environment, it can be hard to know what to build to not get left out.</p>\n<p>But building things too early is enormously expensive, and if you spread yourself thin you likely won’t build anything of substance.</p>\n<p>One way to derisk it is to prove to yourself that if someone else in the market were to find PMF in a given area, within three months you could have a successful crash effort to get out a viable competitor.</p>\n<p>With a <card-link card=\"g4a9e93532f_0_0\">competitor as a pseudo-north-star</card-link>, it’ll be easier to align internal incentives, which might mean that even if it’s possible to build it today, it will still be much cheaper if there were to be a competitor to chase.</p>\n",
	  "title": "Three month crash efforts to derisk PMF scenarios"
	},
	"g4a85094c68_0_80": {
	  "body": "<p>There are lots of things that aren’t that hard if everyone were pulling (mostly) in the same direction. That is, no miracles are required, but lots of people do have to pull together. This is the kind of work that’s just straightforward blocking and tackling, executing.</p>\n<p>This is especially true in PMF or otherwise ambiguous scenarios where there’s no clear shared north star.</p>\n<p>But if you find a north-star--or <card-link card=\"g4a9e93532f_0_0\">one happens naturally</card-link>--then that can snap a lot of things into high gear.</p>\n",
	  "title": "The lack of focus from no clear north star is very expensive"
	},
	"g4a9e93532f_0_0": {
	  "title": "A competitor with PMF is a fallback north-star",
	  "body": "<p>Often it can be hard to find a north-star that everyone agrees to, which can be a drag on velocity.</p>\n<p>But if there’s a successful competitor who has PMF in a way that clearly makes strategic sense for you, too, that’s a convenient ready-made north-star that can be very motivating across the team, especially if the competitor is seen as a threat.</p>\n<p>But <strong>be extremely careful</strong>, for a number of reasons. First, this removes the need to develop a rigorous strategic north-star. If you do end up finding market success and no longer have someone to chase, the team might not know what to do, because the chase will have replaced strategy.</p>\n<p>Secondly, this is a special case of <card-link card=\"g487aed6370_0_191\">us-vs-them as a motivator</card-link>, which can become extremely toxic.</p>\n"
	},
	"g4a9e93532f_0_10": {
	  "title": "Complexity’s defining characteristic is it can’t be reduced",
	  "body": "<p><card-link card=\"g487aed6370_0_45\">Complicated vs complexity</card-link> is one of the key distinctions in many business environments. There are some <card-link card=\"g48845643ff_1_10\">complicated bits of the problem that can be chipped off</card-link>, but the hallmark of a complex problem is an <strong>irreducibly complex core</strong>.</p>\n<p>Complicated problems are black and white and perhaps extremely intricate, but fundamentally they can be separated into independent sub-problems, solved, and then re-combined into a working solution. They resemble software engineering in that way.</p>\n<p>But complex problems are so deeply inter-related in such subtle and important ways that trying to break them into sub-problems and solve them will yield solutions that cannot be recombined and be a viable solution to the broader problem. The sub-solutions are thus illusory and actively distracting; you’ve solved a “problem” that <card-link card=\"g487aed6370_0_161\">violates some key constraints and thus isn’t a good idea</card-link>.</p>\n"
	},
	"g4a9e93532f_0_15": {
	  "body": "<p>People hate a lack of harmony and also <card-link card=\"g487aed6370_0_55\">hate being in abstract, complex problem spaces any longer than they have to</card-link>.</p>\n<p>Sometimes a group has what appears to be high-level consensus on a complex space, that as time goes on and things become more clear, is revealed to be illusory because there were fundamental disagreements. Often this is due to different people assuming that high-level terms had different concrete meanings (e.g. “MVP”, “infrastructure”)</p>\n<p>The solution is to <strong>rigorously document consensus, </strong>including specifically defining key terms, breaking down known constraints, etc. This is akin to writing a design doc to ensure your architectural approach to an engineering problem will work, and is necessary to ensure your consensus rests on a strong, rigorously defined base.</p>\n",
	  "title": "Beware illustory consensus due to ill-defined terms"
	},
	"g4a9e93532f_0_30": {
	  "title": "Engagement in ecosystems follows a power law",
	  "body": "<p>If you look at the engagement of various actors in an ecosystem, it is a well-established pattern that it will follow a (steep) power-law distribution. It is not uncommon for less than 1% of agents to be responsible for 80% of the contributions. This is a specific instance of a <card-link card=\"c-055-fea790\">general phenomena</card-link>.</p>\n<p>Often it’s tempting to try to get a large number of people to contribute to a system: to lower the friction to get more people contributing. But if the motivation doesn’t exist for those users, then reducing friction doesn’t do much. (And it’s not possible to create motivation where it doesn’t exist).</p>\n<p>Instead, the best bet is <strong>find your most motivated contributors and be laser-focused on making them happy and engaged</strong>. From there you can continuously try to grow the population of contributors, but often the biggest bang-for-buck is simply to make your already-engaged contributors have a higher engagement multiplier.</p>\n"
	},
	"g4a9e93532f_0_35": {
	  "title": "In game-theoretic environments, threats must be credible",
	  "body": "<p>Game-theoretic dynamics rule many types of systems, but it’s especially true of agents who are in a zero-sum framing with no relevant and credible higher authority to mutually appeal to.</p>\n<p>In these cases, ultimately all threats and power are informal posturing. What actions are in your adjacent possible define the moves you can plausibly make. You can sometimes posture in a way that makes certain bad moves for you look more plausible by aligning your incentives, or the well-known <card-link href=\"https://en.wikipedia.org/wiki/Madman_theory\">madman approach</card-link>.</p>\n<p>But one of the most important leverage points is demonstrating that your promises and actions in the past have been followed-through on. This is a form of <card-link card=\"g48845643ff_0_311\">credibility</card-link>, and is <card-link card=\"g48845643ff_0_306\">built</card-link>--and <card-link card=\"g487aed6370_0_301\">lost</card-link>--in similar ways. Because <card-link card=\"g4a9e93532f_0_40\">credibility is so difficult to gain but easy to lose</card-link>, credibility is often one of the most important assets in game-theoretic scenarios.</p>\n"
	},
	"g4a9e93532f_0_40": {
	  "body": "<p>Credibility is hard to earn: some must be put on the line to earn it.</p>\n<p>Credibility is a demonstrated history of follow-through on past promises. It is partially an (expensive) way of signaling that your incentives and priorites are aligned so that when you make a promise, you keep it.</p>\n<p>But all it takes is a single slip-up, or a subtle pattern that suggests playing politics, that can call into question your motivations and incentives, and cause the credibility to evaporate extremely quickly.</p>\n<p><card-link card=\"g4a9e93532f_0_35\">Credibility is one of the most important assets in game theory</card-link>.</p>\n",
	  "title": "Credibility is orders of magnitude harder to gain than lose"
	},
	"g4a9e93532f_0_45": {
	  "body": "<p>Orgs have a shared ancestor that everyone reports into, and thus wants to make happy. That creates a natural converging effect, where people in the org all try to align their effort in a way that is at least consistent with what the ancestor wants.</p>\n<p>The nice thing about this converging effect is that it’s automatic and requires no constant influx of energy to maintain.</p>\n<p><card-link card=\"g4a9e93532f_0_50\">Org debt</card-link> exists when this structure is not being put to</p>\n",
	  "title": "Org structures naturally create a converging effect"
	},
	"g4a9e93532f_0_5": {
	  "title": "Transparency is in tension with candor",
	  "body": "<p>A specific (important) example of <card-link card=\"g487aed6370_0_251\">everything is in balance</card-link>.</p>\n<p>If things are fully transparent, and you don’t have a perfectly low-stakes, zero-power-differential environment (which almost never happen), then you likely are not hearing the real information, which means you likely aren’t designing solutions that are fully correct.</p>\n<p>Effectively you’ve failed to seek disconfirming evidence by making it less likely to show up.</p>\n<p>This isn’t to say that transparency isn’t good--because very often, more transparency is called for and good. It’s just to say that transparency is in tension with candor, and thus 100% complete transparency often isn’t good.</p>\n"
	},
	"g4a9e93532f_0_50": {
	  "title": "Org debt",
	  "body": "<p>One of the types of abstract <card-link card=\"g48845643ff_0_388\">debt</card-link>.</p>\n<p>Org structure is a natural convergence effect that can be harnessed to do useful aligning work. <strong>Org debt is when that natural converging effects is not being put to good use, or is working at cross-purposes to the strategic goals.</strong></p>\n<p>It is proportional to the sum of, for each pair in the group of agents who works together often on this project, the number of layers up the hierarchy you have to go to find their common ancestor, multiplied by how closely that pair must work and be aligned.</p>\n<p>Part of the reason is that escalating is a big, scary deal, and if the nearest common ancestor is very high up, there’s a huge chilling effect and many small misalignments won’t be flagged, accumulating and festering (compounding due to us-vs-them) until they might explode</p>\n"
	},
	"g4a9e93532f_0_55": {
	  "title": "Continued alignment requires an influx of energy ",
	  "body": "<p>Alignment--where various agents are converging on the right answer--can be maintained by careful nudging. But it does often require active nudging. The cost of those nudges can add up considerably (while still being cheaper than the cost of motive force), especially if the nudges are of agents that are far afield or whose natural momentum is very different.</p>\n<p><card-link card=\"g4a9e93532f_0_45\">Org structure is one of the (rare) free forms of converging energy</card-link>.</p>\n"
	},
	"c-010-abc723": {
	  "title": " Coordination headwind",
	  "body": ""
	},
	"c-064-eda358": {
	  "body": "<p>Which means that you'll do it less than you should. Which means that you should have good hygiene and <card-link card=\"g48845643ff_0_90\">black and white rules</card-link>, to for example do the <card-link card=\"c-287-bae139\">fortune cookie</card-link> exercise often.</p>\n",
	  "title": "Distilling insights is hard work"
	},
	"c-082-cbf813": {
	  "title": "Peter principle",
	  "body": ""
	},
	"c-099-dac651": {
	  "title": "Stop energy of considering all options",
	  "body": "<p>This is a question that can sound reasonable on its own but <card-link card=\"c-152-eea567\">can add up to non-trivial stop energy</card-link>.</p>\n<p>One of the reasons it often causes excess stop energy is because there are often multiple good ideas, and <card-link card=\"c-693-bfb516\">trying to find the best idea is unnecessary</card-link>.</p>\n"
	},
	"c-114-cab409": {
	  "title": "Taking the broadest possible perspective",
	  "body": "<p>Import for morality (link to other cards)</p>\n<p>Must be curious when surprised by pushback or new information</p>\n<p>Dupe of <card-link card=\"g487aed6370_0_91\">have a moral compass in complex problem spaces</card-link></p>\n"
	},
	"c-118-dce353": {
	  "title": "Things that provide user value are monetizable",
	  "body": ""
	},
	"c-189-cec366": {
	  "body": "<p>Open mindedness. Curious.</p>\n",
	  "title": "Growth mindset"
	},
	"c-222-bdd877": {
	  "body": "",
	  "title": "Insights can compound exponentially"
	},
	"c-228-cda224": {
	  "body": "",
	  "title": "Retconning your current strategy helps you understand it"
	},
	"c-236-aac175": {
	  "title": "Gobble up as many example patterns and lenses",
	  "body": "<p>The more example patterns and lenses (which are stimulus --&gt; pattern extractors), the more you give your <card-link card=\"g48845643ff_0_403\">intuitive brain to work with</card-link>.</p>\n"
	},
	"c-256-bcf995": {
	  "title": "It's hard to make a case for long tail",
	  "body": "<p>Because concrete arguments work better than abstract ones, and the case for the long tail often requires enumerating cases it would cover, but the big-enough examples are all easier to do manually, which makes your case weaker and weaker.The real value of the long-tail is the examples that you can't think of, that happen at such a scale and in so many examples you can't think of that have compounding value</p>\n"
	},
	"c-287-dee205": {
	  "body": "<p>That way you can keep the doc to not be overwhelming ('whoa it's 20 pages I don't ahve time for that', based entirely oin scrollbar) but can still allow people who have more time to pull on htreads. Part of <card-link card=\"c-677-ece301\">writing convincing artifacts</card-link>.</p>\n<p>A more general version of the <card-link card=\"c-716-fcd979\">interlinked FAQ</card-link></p>\n",
	  "title": "Using links to keep documents short"
	},
	"c-347-ffb688": {
	  "title": "Write scratch documents to explore ideas",
	  "body": "<p>Scratch documents, which are where you take everything you know and pull on threads, talking to yourself. Don't worry about it being duplicative or throwaway, or that you might never show it to anyone else (or maybe only your closest collaborators).</p>\n<p>By letting go of it being a useful artifact, you can free yourself to fix down your intuition and pull on threads, and have a full discovery of the problem space</p>\n"
	},
	"c-349-acc002": {
	  "title": "Insights are building blocks for even larger insights",
	  "body": "<p>Once an insight is distilled it can be reasoned about more discretely, and better recombined with oother insights, to form still-lager insights.</p>\n<p>This ability to combine leads <card-link card=\"c-222-bdd877\">to a compounding loop</card-link> (each one you combine increases the adjacent possible of insights, without consuming any).</p>\n"
	},
	"c-367-dea711": {
	  "title": "The power of formatting",
	  "body": "<p>Axios style. Your goal is to get people to have the thought you want them to have. They're busy. The power of the argument in a limited timescale is part of the constraints of a good idea.</p>\n<p>If they have only 30 seconds with the document, can you make it maximally convincing, and then scale to handle all other time scales vai linking? This is part of <card-link card=\"c-940-aba804\">optimizing for the amount of time your readers actually have</card-link>.</p>\n<p>Formatting makes the content easier to scan and skim, allowing key words to pop out for very busy readers, and also helping orient readers who have more time about which content is most useful.</p>\n<p>General guidance on <card-link card=\"c-677-ece301\">writing effective documents</card-link>.</p>\n"
	},
	"c-382-bbe177": {
	  "title": "Stop energy of asking for follow-up analysis",
	  "body": "<p>This is a question that can sound reasonable on its own but<card-link card=\"c-152-eea567\">can add up to non-trivial stop energy</card-link>.</p>\n<p>Everything stays in stasis until the meeting happens, since it might change the course of the project.</p>\n<p>And meetings often take <em>forever </em>to schedule</p>\n"
	},
	"c-383-efb445": {
	  "title": "Ask questions to help people begin to introspect",
	  "body": "<p>In order to get some loose threads to pull on to help them be able to introspect more.</p>\n<p><card-link card=\"c-910-fca170\">Insights about yourself are insights, too</card-link>.</p>\n"
	},
	"c-452-bed320": {
	  "body": "<p>How many choices could it feasibly make? What is the size and quality of the choices it legitimately has available to it?</p>\n",
	  "title": "Power is the size of an agent's adjacent possible"
	},
	"c-490-dbd062": {
	  "body": "",
	  "title": "If you're existentially scared you can't grow"
	},
	"c-569-bde898": {
	  "body": "<p>A more general principle of <card-link card=\"g48845643ff_0_443\">motivated agents can search the adjacent possible</card-link>.</p>\n",
	  "title": "Motivated agents can do useful work for you"
	},
	"c-571-aeb885": {
	  "title": "No one is ever done learning",
	  "body": "<p>Related to you <card-link card=\"c-380-ccf633\">always have <em>something</em> to learn from <em>everyone</em></card-link>.</p>\n"
	},
	"c-584-efc697": {
	  "title": "In complex systems, the messiness is load bearing",
	  "body": "<p>Complex system are resilient because they have variance to work with and respond to external pressures and changes. And because of the high degree of non-linearity and compounding, it's impossible to reason about the effect of any one change (especially ones that are non-continuous).</p>\n<p>So it can be tempting to want to \"clean up\". But often the messiness is why it works in the first place. <card-link card=\"c-556-aaa213\">It's impossible to figure out which slop is load bearing</card-link>.</p>\n<p>Related to the polarity of resilient vs clean</p>\n"
	},
	"c-602-aea694": {
	  "title": "Ontological humility",
	  "body": "<p>Similar (exactly?) as <card-link card=\"g487aed6370_0_141\">curiosity</card-link></p>\n"
	},
	"c-624-fee311": {
	  "title": "Stop energy of a concern over a detail",
	  "body": "<p>This is a question that can sound reasonable on its own but <card-link card=\"c-152-eea567\">can add up to non-trivial stop energy</card-link>.</p>\n<p>Most details don't matter.</p>\n<p>Related to surface area of the argument.</p>\n<p>People thinking the point is to win the argument or \"add value\" in the argument versus help <card-link card=\"c-270-aeb148\">good things</card-link> happen.</p>\n"
	},
	"c-626-ebe599": {
	  "body": "",
	  "title": "Aggregation effect"
	},
	"c-672-cce340": {
	  "body": "<p>This is another example of the <card-link card=\"c-927-dab734\">hallmark card curse</card-link>.</p>\n<p>Dupe of <card-link card=\"c-143-eeb845\">challenge is the only way to grow</card-link>?</p>\n",
	  "title": "Challenges are opportunities for growth"
	},
	"c-677-ece301": {
	  "title": "Writing convincing artifacts",
	  "body": "<p><card-link card=\"c-940-aba804\">Optimize for the time your readers will actually spend</card-link></p>\n<p><card-link card=\"c-367-dea711\">Power of formatting</card-link></p>\n<p><card-link card=\"c-237-fde112\">Minimal spanning argument</card-link></p>\n<p><card-link card=\"c-287-dee205\">Make the doc not be too long by using links</card-link></p>\n<p><card-link card=\"c-347-ffb688\">Write a scratch document</card-link></p>\n<p><card-link card=\"c-718-fec234\">Make the doc messy to invite feedback on the ideas not the details</card-link></p>\n"
	},
	"c-682-bac995": {
	  "body": "<p>Perfection is infinitely expensive.</p>\n<p>Often there are a number of good steps that you can take that are all fine.</p>\n<p><card-link card=\"c-493-bfd938\">If the problem is getting easier over time, then you can wait</card-link>.</p>\n",
	  "title": "The power of good enough"
	},
	"c-700-cdd873": {
	  "body": "<p>If you're in a new existentially scary mindset (promoted to a stretch opportunity unexpectedly, or a crisis pops onto the scene) you'll likely be in existentially-threatened mindset.</p>\n<p>So instead of using the <card-link card=\"c-143-eeb845\">challenge to grow</card-link>, you'll just do more of what was successful before, (but likely won't be now) which will make it worse, so you'll do more of it, at a compounding rate until you hit <card-link card=\"c-020-abe755\">rock bottom in a crisis and then are open to growth</card-link>.</p>\n",
	  "title": "Grow into challenges, don't crouch defensively"
	},
	"c-708-bcf199": {
	  "body": "<p>Growth is scary. It takes introspection and seeking disconfirming evidence from others who can see you more clearly than you can see yourself, and different perspectives to learn from.</p>\n<p>It can feel like you need to grow heroically only from within. But heroics are bad. You're more likely to fail spectacularly.</p>\n",
	  "title": "Rely on those around you to help yourself grow and learn"
	},
	"c-716-fcd979": {
	  "body": "",
	  "title": "Interlinked FAQ pattern for rebutting critiques"
	},
	"c-745-afc766": {
	  "title": "People who benefit from a power dynamic will be blind to it",
	  "body": "<p>A more general version of <card-link card=\"g48845643ff_0_408\">privilege leads to confirmation bias</card-link>.</p>\n<p>Also, why <card-link card=\"c-758-aaf508\">people on top always lose touch</card-link>.</p>\n<p>Dupe of <card-link card=\"c-761-cdd993\">Powerful people unaware of the power they w</card-link>ield</p>\n"
	},
	"c-755-cec952": {
	  "title": "Learn by pulling on threads when you're surprised",
	  "body": ""
	},
	"c-758-aaf508": {
	  "body": "<p>Why do people who are amazing get promoted to nearly always become worse versions of themselves?</p>\n<p>One reason is the <card-link card=\"c-082-cbf813\">peter principle</card-link>.</p>\n<p>Another is that <card-link card=\"c-745-afc766\">people who enjoy power will be blind</card-link> to it and they'll <card-link card=\"c-812-acb509\">think they're smarter than they are</card-link>.</p>\n<p>Another is that they'll deal with larger and more complex problems, and if <card-link card=\"c-700-cdd873\">they crouch down instead of growing into a challenge</card-link>, they'll do worse and worse over time.</p>\n",
	  "title": "People on top always lose touch"
	},
	"c-792-ffb794": {
	  "body": "<p>Another example of the <card-link card=\"c-927-dab734\">hallmark card curse</card-link>.</p>\n",
	  "title": "It's the journey that counts"
	},
	"c-794-cbb266": {
	  "title": "When you think you walk on water you won't learn",
	  "body": "<p><card-link card=\"c-812-acb509\">People think they're smarter than they are</card-link></p>\n<p><card-link card=\"c-661-ddb399\">People who don't know they need help can't be helped</card-link></p>\n<p>Watch out because when you're feeling great you'll learn only from \"good\" challenge, but will likely close your ears to the bad challenge, <card-link card=\"c-133-dbf968\">which is unit for unit more powerful than good challenge</card-link>.</p>\n"
	},
	"c-805-ccf004": {
	  "title": "Disagreement can snowball quickly",
	  "body": "<p>Because stop energy is easier than forward energy. Goes up with the square of number of people watching. Imagine the number of links between people, and each link has the potential to trigger a \"that's a good point\"</p>\n"
	},
	"c-869-ebe777": {
	  "title": "Acknowledge to yourself when you're in over your head",
	  "body": "<p>Otherwise a part of your brain will be defending you from realizing that you feel existentially threatened.</p>\n<p>This is even worse than <em>feeling </em>existentially threatened, becuase at least when you feel it you're feeling a strong emotion that can hint for you that something is very wrong.</p>\n<p>If you realize you're in over your head, you <card-link card=\"c-708-bcf199\">can look for support</card-link>, and make sure you're more likly to be in a growth mindset.</p>\n"
	},
	"c-893-dcb452": {
	  "title": "More politics is worse than less politics",
	  "body": "<p>Politics is a fact of life in any system made up of humans (or really any motivated agents). But that's not to say that politics is <em>good</em>.</p>\n<p>All other things equal, more politics is worse than less politics. So if you have a choice to<card-link card=\"c-597-daf136\"> zig or zag</card-link>, choose the one with less politics.&nbsp;</p>\n"
	},
	"c-898-aca558": {
	  "body": "<p>The <card-link card=\"c-039-dbb934\">context is always evolving in a complex system</card-link>, since decisions of agents change the context in which other agents make decisions.</p>\n<p><card-link card=\"c-236-acf412\">The fitness function is emergent and depends on the context.</card-link></p>\n",
	  "title": "Context can be thought of as a fitness landscape"
	},
	"c-898-dbb965": {
	  "title": "If a system isn't growing, it's dying",
	  "body": ""
	},
	"c-905-efa970": {
	  "title": "No pain no gain",
	  "body": "<p>Another example of the <card-link card=\"c-927-dab734\">hallmark card curse</card-link>.</p>\n"
	},
	"c-910-fca170": {
	  "title": "Insights about yourself are insights, too",
	  "body": "<p>That means that they will <card-link card=\"c-222-bdd877\">compound into larger and larger insights</card-link>.</p>\n<p>And if you cultivate the feeling, they'll give you a boost of momentum in your journey of self discovery.</p>\n"
	},
	"c-940-aba804": {
	  "title": "Optimize for the time your readers will actually spend",
	  "body": ""
	},
	"c-944-aba951": {
	  "title": "Plant A Number Of Seeds",
	  "body": "<p>This is the one about planting lots of little seeds all around you so no matter which way the wind is blowing at least one of them can be worked on</p>\n"
	},
	"c-947-ebb297": {
	  "body": "",
	  "title": "Systems experiencing a discontinuity become chaotic"
	},
	"c-949-ebe931": {
	  "body": "",
	  "title": "If the idea will be cheaper in the future, wait"
	},
	"c-953-acb518": {
	  "body": "<p>A stronger statement of <card-link card=\"g4a3ed6c576_8_0\">compounding metrics are almost always good</card-link></p>\n",
	  "title": "Good strategies all have some kind of super-linearity"
	},
	"c-969-fce754": {
	  "body": "",
	  "title": "Small changes in rules have large strategy impacts"
	},
	"g48845643ff_0_14": {
	  "body": "",
	  "title": "You are biased about your own position in an ecosystem"
	},
	"g48845643ff_0_150": {
	  "body": "<p>Intrinsic energy comes from carefully calibrated loops within the system, and are hard to predict.</p>\n<p>Trying to create new ones is akin to t<card-link card=\"g48845643ff_0_155\">rying to create a thriving engine in a alab</card-link>.</p>\n<p>Instead, try to focus on harnessing or encouraging existing intrinsic energy</p>\n<p>This is now a dupe of <card-link card=\"c-886-dda466\">don't try to create intrinsic </card-link>motivation</p>\n",
	  "title": "Don’t try to create intrinsic energy"
	},
	"g48845643ff_0_19": {
	  "title": "A single closed point can affect an entire ecosystem",
	  "body": ""
	},
	"g48845643ff_0_2": {
	  "title": "Openness is about power differentials",
	  "body": ""
	},
	"g48845643ff_0_31": {
	  "body": "",
	  "title": "Premature monetization can break an ecosystem’s loops"
	},
	"g48845643ff_0_43": {
	  "title": "Openness is an extreme “commoditize your complement”",
	  "body": ""
	},
	"g48845643ff_0_54": {
	  "title": "Openness is not intrinsically a moral good",
	  "body": ""
	},
	"g48845643ff_0_559": {
	  "title": "Ask if someone wants solutions or sympathy",
	  "body": ""
	},
	"g48845643ff_0_78": {
	  "body": "",
	  "title": "Dinosaur Bones: Hidden but concrete constraints"
	},
	"g4a85094c68_0_70": {
	  "title": "The entity that renders the pixels has the power",
	  "body": ""
	}
};