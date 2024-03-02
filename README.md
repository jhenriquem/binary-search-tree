# Árvores Binárias de Busca

Este repositório contém um simples gerador de árvores binárias de busca. Uma árvore binária de busca é uma estrutura de dados na qual cada nó possui no máximo dois filhos, e os valores dos nós à esquerda são menores ou iguais ao valor do nó pai, enquanto os valores dos nós à direita são maiores.

## Funcionalidades

### Inserção de Elementos

```javascript
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
```

### Remoção de Elementos

```javascript
bst.delete(3);
```

### Busca de Elementos

O método find(value) permite buscar um elemento específico na árvore. Ele retorna o nó correspondente ao valor especificado.

```javascript
bst.find(7);
```

### Balanceamento da Árvore

A função balanced() equilibra a árvore binária de busca de forma aproximada, redistribuindo os elementos para garantir uma altura mais equilibrada. Isso ajuda a melhorar o desempenho das operações na árvore.

```javascript
bst.balanced();
```

### Exemplo de Uso

```javascript
const array = [
  14, 14, 5, 77, 3, 4, 67, 3, 4, 6, 56, 5, 5243, 47, 45, 47, 8, 84, 33,
];
const bst = new BinarySearchTree();
bst.insertArray(array);
console.log(bst.inOrder()); // Exibe a ordem dos elementos na árvore
bst.balanced(); // Equilibra a árvore
bst.display(); // Exibe a árvore
```

![A screenshot of the Binary Search Trees assignment](https://github.com/jhenriquem/binary-search-tree/blob/main/img.png)
