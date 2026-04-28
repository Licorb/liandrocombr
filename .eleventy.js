module.exports = function(eleventyConfig) {
  
  // Copia a pasta assets sem processamento
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Filtro de data em formato legível (ex: 28 de abril de 2026)
  eleventyConfig.addFilter("dateFilter", function(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  });
  
  // Filtro de data em formato ISO (ex: 2026-04-28)
  eleventyConfig.addFilter("dateIso", function(date) {
    return new Date(date).toISOString().split('T')[0];
  });
  
  // Filtro para limitar arrays (ex: ultimos 3 posts)
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });
  
  // Configurações de entrada e saída
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    
    // Formatos de template suportados
    templateFormats: ["md", "njk", "html", "liquid"],
    
    // Motor de template para arquivos markdown
    markdownTemplateEngine: "njk",
    
    // Motor de template para arquivos HTML
    htmlTemplateEngine: "njk",
    
    // Motor de template padrão
    dataTemplateEngine: "njk"
  };
};