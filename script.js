const terms = [
    { term: "Instinct Theory", definition: "Behaviors are driven by innate biological instincts." },
    { term: "Drive Reduction Theory", definition: "Physiological needs create a drive to satisfy those needs." },
    { term: "Homeostasis", definition: "The body's ability to maintain internal balance." },
    { term: "Hierarchy of Needs", definition: "Maslow's pyramid of human motivation, from basic needs to self-actualization." },
    { term: "Intrinsic Motivation", definition: "Motivation driven by internal factors like enjoyment and curiosity." },
    { term: "Approach-Avoidance Conflict", definition: "A single decision has both positive and negative aspects." },
    { term: "Facial Feedback Hypothesis", definition: "Facial expressions influence emotional experiences." },
    { term: "Psychoanalysis", definition: "Freud's theory exploring unconscious motivations and childhood experiences." },
    { term: "Social Cognitive Theory", definition: "Learning through observation and interaction with the environment." },
    { term: "Displacement", definition: "Redirecting emotions to a safer target." },
    { term: "Projection", definition: "Attributing one's own unacceptable thoughts to others." },
    { term: "Regression", definition: "Reverting to an earlier stage of development under stress." },
    { term: "Rationalization", definition: "Justifying behaviors with seemingly logical reasons." },
    { term: "Reaction Formation", definition: "Acting in a way opposite to true feelings." },
    { term: "Projective Test", definition: "A psychological test using ambiguous stimuli to reveal unconscious thoughts." },
    { term: "Inkblot Test", definition: "A projective test where people interpret inkblots." },
    { term: "Unconditional Positive Regard", definition: "Accepting and supporting someone regardless of their actions." },
    { term: "Factor Analysis", definition: "A statistical method to identify underlying relationships between variables." },
    { term: "Reciprocal Determinism", definition: "Behavior, personal factors, and environment influence each other." },
    { term: "Self-Efficacy", definition: "A person's belief in their ability to succeed in specific situations." }
];

const flashcardsContainer = document.getElementById('flashcards-container');

terms.forEach(({ term, definition }) => {
    const card = document.createElement('div');
    card.classList.add('flashcard');
    card.textContent = term;
    
    card.addEventListener('click', () => {
        if (card.classList.contains('flipped')) {
            card.textContent = term;
            card.classList.remove('flipped');
        } else {
            card.textContent = definition;
            card.classList.add('flipped');
        }
    });
    
    flashcardsContainer.appendChild(card);
});
