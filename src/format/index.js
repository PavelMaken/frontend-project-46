import makePlain from "./plain";
import formatStylish from "./stylish";

export default function formater(tree, format) {
    switch (format) {
      case 'stylish':
        return formatStylish(tree);
      case 'plain':
        return makePlain(tree);
      case 'json':
        return JSON.stringify(tree);
      default:
        throw new Error('Uncorrect data');
    }
  }