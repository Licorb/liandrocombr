---
layout: listagem.njk
title: "Oficina"
description: "Experimentos e experiências"
eleventyExcludeFromCollections: true
---

{% for item in collections.oficina | reverse %}
<a href="{{ item.url }}" class="card-horizontal">
    <div class="thumb-mini">
        {% if item.data.image %}
            <img src="{{ item.data.image }}" alt="{{ item.data.title }}">
        {% endif %}
    </div>
    
    <div class="card-info">
        <h2>{{ item.data.title }}</h2>
        <p class="card-excerpt">
            {{ item.data.excerpt | default("Clique para ler mais...") }}
        </p>
        <div class="card-meta">
            <span>{{ item.date | dateFilter }}</span>
            <div class="post-tags">
                            <span class="tag">{{ item.data.tags[0] }}</span>
                            <span class="tag">{{ item.data.tags[1] }}</span>
            </div>
        </div>
    </div>
</a>
{% endfor %}