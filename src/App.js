import './App.scss';
import React from 'react';
import Door from './components/Door';
import Modal from './components/Modal';
import Snow from './components/Snowflakes';

class App extends React.Component {
  state = {
    doors: this.shuffle(this.getRandomDoors()),
    isModalOpen: false,
    text: '',
    color: '',
  };

  getRandomDoors() {
    return [
      {
        image: 'https://i.imgur.com/10sqRax.png',
        text:
          'The Moon advises you to look for the answers to your questions in dark and unexplored places. The results will be brilliant, but they may take some to time to find.',
        color: '#FFEA96',
      },
      {
        image: 'https://i.imgur.com/Z1ncWU2.png',
        text:
          'The Tower warns you that part of your life is in dire need of restructuring and may soon crumble, but with some planning, you can build something much stronger in its place.',
        color: '#F7A5A7',
      },
      {
        image: 'https://i.imgur.com/lh5kpOG.png',
        text:
          'Wheel of Fortune presages a change of circumstances, often for the better but occasionally not. You must remember, however, that the wheels of fate never stop turning, and adaptability is important.',
        color: '#E3B2D2',
      },
      {
        image: 'https://i.imgur.com/XO0kB4g.png',
        text:
          'The Lovers call on you to explore a neglected or overlooked passion, but do not let momentary flames of caprice and enthusiasm destroy your longstanding commitments.',
        color: '#D5E6F0',
      },
      {
        image: 'https://i.imgur.com/obtcJe2.png',
        text:
          'The Hanged Man reminds you that success requires personal sacrifice and unwavering dedication. Remember, however, that it is foolish to martyr yourself for attention or sympathy alone.',
        color: '#90D7EB',
      },
      {
        image: 'https://i.imgur.com/emu0m7y.png',
        text:
          'The Star advises you not to lose hope for something seemingly unattainable. It is much closer than you think, but wishing alone is insufficient. You must act on your thoughts as well.',
        color: '#E9F6FE',
      },
      {
        image: 'https://i.imgur.com/9rAsVtv.png',
        text:
          'The Empress calls on you to confront a challenge through kindness, openness, and generosity, but you must be careful not to let others use your good will for selfish purposes.',
        color: '#FFF9C1',
      },
      {
        image: 'https://i.imgur.com/pO3E6t3.png',
        text:
          'The Hierophant, also known as The Pope, advises you to follow your current path and avoid distractions or deviations, but do not let yourself become stiff or brittle, as brittle things tend to crack.',
        color: '#FDEFEE',
      },
      {
        image: 'https://i.imgur.com/xp9inxC.png',
        text:
          'Temperance urges you to pursue success through balance and moderation. Avoid rash decisions or extreme solutions, as well as timidity or excessive smugness.',
        color: '#FDDBC0',
      },
      {
        image: 'https://i.imgur.com/0ixXllX.png',
        text:
          'The World, the last card and culmination of the tarot, encourages you to collect your scattered thoughts and actions and put them toward something meaningful. The results will astound you, but the process takes time.',
        color: '#FCEADE',
      },
      {
        image: 'https://i.imgur.com/FKJy5iR.png',
        text:
          'The Hermit reminds you to give yourself proper time for self-reflection and introspection, but you must also take care not to drift into isolation or excessive self-involvement.',
        color: '#EDE4F1',
      },
      {
        image: 'https://i.imgur.com/4RuYE0b.png',
        text:
          'The Fool, card zero of the tarot, encourages you to try something adventurous and new. Unfamiliarity can be invigorating, but take care not to put yourself in needless danger.',
        color: '#DCEFF7',
      },
      {
        image: 'https://i.imgur.com/aTV9ra7.png',
        text:
          'The Sun suggests that the answer to your questions is plainly before you like a shining light, but it is best to approach it coolly and at a certain distance, as the truth could burn you.',
        color: '#F7DCE5',
      },
      {
        image: 'https://i.imgur.com/XMzJEmp.png',
        text:
          'The Devil dares you to break free of an addiction or unhealthy attachment, but you must be patient with yourself, as the Devil can feed on self-hatred.',
        color: '#FFB5B5',
      },
      {
        image: 'https://i.imgur.com/apX8Vox.png',
        text:
          'Judgement advises you to examine your motivations and priorities and abandon what is useless or petty. Do not judge things too severely, however, as usefulness comes in many forms.',
        color: '#EFD6FF',
      },
      {
        image: 'https://i.imgur.com/OKIvohS.png',
        text:
          'The High Priestess recommends that you connect with your intuition to uncover new insights and truths, but you must be patient with the process, as it will resist your efforts to control it.',
        color: '#90D7EB',
      },
      {
        image: 'https://i.imgur.com/jt4YQSE.png',
        text:
          'The Chariot urges you to pursue an old ambition with new intensity and vigor. Success is imminent, but you must focus on the path that lies ahead, lest you crash.',
        color: '#E3F1E4',
      },
      {
        image: 'https://i.imgur.com/UrfakPf.png',
        text:
          'Strength directs you to gather your bravery and fortitude to overcome a stubborn challenge, but you must not waste this power on trivialities.',
        color: '#FFEB95',
      },
      {
        image: 'https://i.imgur.com/9PKYv3z.png',
        text:
          'Justice informs you that now is the time to correct an injustice committed against you or a loved one, but in return you must begin to address your own unjust actions.',
        color: '#F6ABBF',
      },
      {
        image: 'https://i.imgur.com/BQfhzO6.png',
        text:
          'The Magician predicts that an opportunity or idea will present itself to you as if by magic, but you must seize it before it vanishes beneath trickery and false promises.',
        color: '#F5F8DD',
      },
      {
        image: 'https://i.imgur.com/G43JQzH.png',
        text:
          'Death foretells the end of something dear to you and the arrival of something new to replace it. You must not try to stop this process, as it is natural and inevitable.',
        color: '#CECFCB',
      },
      {
        image: 'https://i.imgur.com/A72Gkdl.png',
        text:
          'The Emperor advises you to take control of a chaotic situation through firmness and resolve, but you must avoid being too harsh and incurring the resentment of those around you.',
        color: '#F3F2F9',
      },
      {
        image: 'https://i.imgur.com/emu0m7y.png',
        text:
          'The Sun suggests that the answer to your questions is plainly before you like a shining light, but it is best to approach it coolly and at a certain distance, as the truth could burn you.',
        color: '#FFEB95',
      },
      {
        image: 'https://i.imgur.com/XMzJEmp.png',
        text:
          'The Devil dares you to break free of an addiction or unhealthy attachment, but you must be patient with yourself, as the Devil can feed on self-hatred.',
        color: '#C38FBF',
      },
    ].map(item => ({
      ...item,
      isOpen: false,
    }));
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  renderDoors() {
    return this.state.doors.map((door, i) => (
      <Door
        style={door.color}
        key={i}
        index={i + 1}
        {...door}
        onClick={() => this.openModal(i, door.text, door.color)}
      />
    ));
  }

  openModal(index, text, color) {
    const { doors } = this.state;

    const newDoors = [
      ...doors.slice(0, index),
      { ...doors[index], isOpen: true },
      ...doors.slice(index + 1),
    ];

    this.setState({
      text,
      doors: newDoors,
      color,
    });

    setTimeout(() => {
      this.setState({
        isModalOpen: true,
      });
    }, 1000);
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div className="advent">
        <Snow />

        <h1 className="advent__title">Tarot Reading Advent Calendar</h1>
        <h4 className="advent__title  advent__title--sub">
          only openable if the december day has come (images from{' '}
          <a
            href="https://kawaiitarot.com/fools-journey-beginners/?pp=1"
            target="_blank"
            rel="noreferrer"
          >
            Kawaii Tarot
          </a>
          )
        </h4>
        <div className="advent__doors-container">{this.renderDoors()}</div>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()}
          color={this.state.color}
        >
          <h1>{this.state.text}</h1>
        </Modal>
      </div>
    );
  }
}

export default App;
