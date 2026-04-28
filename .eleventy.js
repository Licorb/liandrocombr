module.exports = function(eleventyConfig) {
  
  // Copia a pasta assets sem processamento
  eleventyConfig.addPassthroughCopy("src/assets");
  
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