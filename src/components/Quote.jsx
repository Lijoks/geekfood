import React from 'react'

const Quote = () => {
  const quotes = [
    { text: "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.", author: "Adam Scott" },
    { text: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.", author: "Adelle Davis" },
    { text: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.", author: "Adelle Davis" },
    { text: "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.", author: "Albert Einstein" },
    { text: "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.", author: "Alice May Brock" },
    { text: "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, 'Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.' Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality.", author: "Anthelme Brillat-Savarin" },
    { text: "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society.", author: "Calvin Trillin" },
    { text: "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.", author: "Calvin Trillin" },
    { text: "Tell me what you eat, and I will tell you what you are.", author: "Cyra McFadden" },
    { text: "Health food makes me sick.", author: "Eike von Repkow" },
    { text: "The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.", author: "Epictetus" },
    { text: "I no longer prepare food or drink with more than one ingredient.", author: "Epictetus" },
    { text: "Eating is really one of your indoor sports. You play three times a day, and it's well worth while to make the game as pleasant as possible.", author: "Fran Lebowitz" },
    { text: "My ability to tolerate shame, to compartmentalize it, to swallow it, increased right along with my belt size. It came with the territory of being heavy. Obese people have a lifetime of experience with shame.", author: "Fran Lebowitz" },
    { text: "The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.", author: "G. K. Chesterton" },
    { text: "He who comes first, eats first. [Familiar as: First come first served.]", author: "Geoffrey Neighor" },
    { text: "Bear in mind that you should conduct yourself in life as at a feast.", author: "George Bernard Shaw" },
    { text: "Preach not to others what they should eat, but eat as becomes you, and be silent.", author: "George Dennison Prentice" },
    { text: "I have never cared much for fish - it floats in the belly as much as in the pond.", author: "Henry Bromel" },
    { text: "If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.", author: "J. R. R. Tolkien" }
  ]

  return (
    <section className="quote-page">
      <h2 className="quote-heading">Food Quotes</h2>
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <blockquote key={index} className="quote-block">
            <p className="quote-text">{quote.text}</p>
            <cite className="quote-author">— {quote.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Quote