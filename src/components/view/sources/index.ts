import './sources.css';
import './alphabet.css';
import { DataSource } from '../../types';

class SourcesBase {
  draw(data: DataSource[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp');
    if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
      throw new Error('');
    }
    const arr: string[] = [];
    data.forEach((item) => {
      arr.push(item.name.slice(0, 1));
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });
    const frag = document.createDocumentFragment();
    const arrayNews = [...new Set(arr)];
    arrayNews.forEach((item) => {
      const alphabetClone = document.createElement('li');
      alphabetClone.classList.add('alphabet__item');
      alphabetClone.textContent = item;
      frag.append(alphabetClone);
    });
    document.querySelector('.alphabet').append(frag);

    document.querySelector('.sources').append(fragment);
    const setAlphabet = document.querySelectorAll('.alphabet__item');
    setAlphabet.forEach((button) => {
      button.addEventListener('click', () => {
        const dataNew: DataSource[] = [];
        data.forEach((item) => {
          if (item.name.slice(0, 1) == button.textContent) {
            document.querySelector('.sources').innerHTML = '';
            dataNew.push(item);
          }
        });
        dataNew.forEach((item) => {
          arr.push(item.name.slice(0, 1));
          const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

          sourceClone.querySelector('.source__item-name').textContent = item.name;
          sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

          fragment.append(sourceClone);
          setTimeout(() => document.querySelector('.sources').append(fragment), 300);
        });
      });
    });
  }
}

export const Sources = new SourcesBase();
