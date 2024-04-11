### Types of Lemmatizers

Now that you understand what lemmatization is and how it differs from stemming, let's dive into the two most commonly used lemmatizers in Python: the WordNet Lemmatizer and the SpaCy Lemmatizer. Each has its own strengths and weaknesses, so it's important to understand how they work and when to use them.

#### WordNet Lemmatizer

The WordNet Lemmatizer is part of the Natural Language Toolkit (NLTK) library in Python. It uses the WordNet database, which is a large lexical database of English words, to determine the base form of a word. The algorithm looks up each word in the WordNet database and returns the lemma of the word.

One advantage of the WordNet Lemmatizer is that it is based on a well-established lexical database, which makes it quite accurate. However, a limitation is that it requires the part-of-speech (POS) tag of a word to determine the correct lemma. This means you need to perform POS tagging on your text before lemmatization, which can be time-consuming.

Here's an example of how to use the WordNet Lemmatizer in Python:

```python
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet

lemmatizer = WordNetLemmatizer()

def get_wordnet_pos(word):
    """Map POS tag to first character lemmatize() accepts"""
    tag = nltk.pos_tag([word])[0][1][0].upper()
    tag_dict = {"J": wordnet.ADJ,
                "N": wordnet.NOUN,
                "V": wordnet.VERB,
                "R": wordnet.ADV}
    return tag_dict.get(tag, wordnet.NOUN)

text = "The findings revealed that social media usage was correlated with feelings of loneliness."
words = nltk.word_tokenize(text)

lemmatized_words = [lemmatizer.lemmatize(w, get_wordnet_pos(w)) for w in words]
print(lemmatized_words)
```

Output:
```
['The', 'finding', 'reveal', 'that', 'social', 'medium', 'usage', 'be', 'correlate', 'with', 'feeling', 'of', 'loneliness', '.']
```

#### SpaCy Lemmatizer

SpaCy is another popular library for natural language processing in Python. Its lemmatizer is based on a pre-trained model that predicts the lemma of a word based on its context. This means that, unlike the WordNet Lemmatizer, it doesn't require separate POS tagging.

The SpaCy Lemmatizer is generally faster than the WordNet Lemmatizer because it doesn't need to look up each word in a database. However, its accuracy depends on the quality of the pre-trained model, which can vary for different languages and domains.

Here's an example of using the SpaCy Lemmatizer:

```python
import spacy

nlp = spacy.load("en_core_web_sm")

text = "The findings revealed that social media usage was correlated with feelings of loneliness."
doc = nlp(text)

lemmatized_words = [token.lemma_ for token in doc]
print(lemmatized_words)
```

Output:
```
['the', 'finding', 'reveal', 'that', 'social', 'media', 'usage', 'be', 'correlate', 'with', 'feeling', 'of', 'loneliness', '.']
```

As you can see, the results are similar to the WordNet Lemmatizer, but the SpaCy Lemmatizer was able to handle the POS tagging implicitly.

When deciding between these two lemmatizers, consider the trade-off between accuracy and speed. If you have a large corpus and need to process it quickly, the SpaCy Lemmatizer might be a better choice. If accuracy is your top priority and you have the time for POS tagging, the WordNet Lemmatizer could be preferable.

In the next section, we'll compare stemming and lemmatization in more detail and discuss when you might choose one over the other in your sociological text analysis projects.