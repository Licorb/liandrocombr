---
layout: listagem.njk
title: "Repertório"
description: "Fichamentos, notas de leitura e referências."
date: "2026-04-30"
---

{% for post in collections.posts | reverse %}
<a href="{{ post.url }}" class="card-horizontal">
    <div class="thumb-mini">
        {% if post.data.image %}
            <img src="{{ post.data.image }}" alt="">
        {% endif %}
    </div>
    
    <div class="card-info">
        <h2>{{ post.data.title }}</h2>
        <p class="card-excerpt">
            {{ post.data.description | default(post.templateContent | striptags | truncate(100)) }}
        </p>
        <div class="card-meta">
            <span>{{ post.date | dateFilter }}</span>
            <div class="post-tags">
                            <span class="tag">{{ post.data.tags[0] }}</span>
                            <span class="tag">{{ post.data.tags[1] }}</span>
            </div>
        </div>
    </div>
</a>
{% endfor %}