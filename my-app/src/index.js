import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Task1 extends React.Component {
	constructor() {
		super();
		this.state = { users: [
            {name: 'Микола', surname: 'Шевченко', age: 35},
            {name: "Василь", surname: "Чумак", age: 28},
            {name: "Галина", surname: "Стеценко", age: 30}
        ]
    }
	}
    render() {
        let info = (<h1>1</h1>);
        let table = '';

        table = this.state.users.map((item, index) => {
            return (<tr key={index}>Користувач:
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.age}</td>
            </tr>)
        });

        return (
            <div>
                { info }
                <table>
                    { table }
                </table>
            </div>
        );
    }
}

class AppTask1 extends React.Component {
	render() {
		return <div>
			<Task1 />
		</div>;
	}
}

const Task2 = ({ users, showMessage }) => {
        const handleLinkClick = () => {
          showMessage();
        };

    return (
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Вік</th>
              <th>Дія</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.age}</td>
                <td>
                  <a href="#" onClick={handleLinkClick}>
                    Показати повідомлення
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

class AppTask2 extends React.Component {
	showMessage = () => {
        alert('!');
      };
    
      render() {
        const users = [
            {name: 'Микола', surname: 'Шевченко', age: 35},
            {name: "Василь", surname: "Чумак", age: 28},
            {name: "Галина", surname: "Стеценко", age: 30}
        ];
    
        return (
          <div>
            <h1>2</h1>
            <Task2 users={users} showMessage={this.showMessage} />
          </div>
        );
      }
}

const Task3 = ({ users, showMessage }) => {
  const handleLinkClick = (name) => {
    showMessage(name);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Вік</th>
          <th>Дія</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.age}</td>
            <td>
              <a href="#" onClick={() => handleLinkClick(user.name)}>
                Показати повідомлення
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

class AppTask3 extends React.Component {
  showMessage = (message) => {
    alert(message);
  };

  render() {
    const users = [
        {name: 'Микола', surname: 'Шевченко', age: 35},
        {name: "Василь", surname: "Чумак", age: 28},
        {name: "Галина", surname: "Стеценко", age: 30},
    ];

    return (
      <div>
        <h1>3</h1>
        <Task3 users={users} showMessage={this.showMessage} />
      </div>
    );
  }
}

const Task4 = ({ users, showMessage }) => {
    const handleLinkClick = (name) => {
      showMessage(name);
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Вік</th>
            <th>Дія</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.age}</td>
              <td>
                <a href="#" onClick={() => handleLinkClick(index)}>
                  Показати повідомлення
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  class AppTask4 extends React.Component {
    showMessage = (message) => {
      alert(message);
    };
  
    render() {
      const users = [
          {name: 'Микола', surname: 'Шевченко', age: 35},
          {name: "Василь", surname: "Чумак", age: 28},
          {name: "Галина", surname: "Стеценко", age: 30},
      ];
  
      return (
        <div>
          <h1>4</h1>
          <Task4 users={users} showMessage={this.showMessage} />
        </div>
      );
    }
  }

  const Task5 = ({ users, deleteUser }) => {
    const handleLinkClick = (index) => {
        deleteUser(index);
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Вік</th>
            <th>Дія</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.age}</td>
              <td>
                <a href="#" onClick={() => handleLinkClick(index)}>
                  Видалити
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  class AppTask5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [
            {name: 'Микола', surname: 'Шевченко', age: 35},
            {name: "Василь", surname: "Чумак", age: 28},
            {name: "Галина", surname: "Стеценко", age: 30},
          ],
        };
      }
    
      deleteUser = (index) => {
        const updatedUsers = [...this.state.users];
        updatedUsers.splice(index, 1);
        this.setState({ users: updatedUsers });
      };
    
      render() {
        const { users } = this.state;
  
      return (
        <div>
          <h1>5</h1>
          <Task5 users={users} deleteUser={this.deleteUser} />
        </div>
      );
    }
}

  const Task6 = ({ item, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(item);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleInputChange = (e) => {
      setEditedText(e.target.value);
    };
  
    const handleInputBlur = () => {
      setIsEditing(false);
      onEdit(editedText);
    };
  
    return (
      <li>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
          <>
            {item}
            <a href="#" onClick={handleEditClick}>
              Редагувати
            </a>
          </>
        )}
      </li>
    );
  };
  
  const AppTask6 = () => {
    const [items, setItems] = useState(['Елемент 1', 'Елемент 2', 'Елемент 3']);
  
    const handleEditItem = (index, editedText) => {
      const updatedItems = [...items];
      updatedItems[index] = editedText;
      setItems(updatedItems);
    };
  
    return (
      <div>
        <h1>6</h1>
        <ul>
          {items.map((item, index) => (
            <Task6
              key={index}
              item={item}
              onEdit={(editedText) => handleEditItem(index, editedText)}
            />
          ))}
        </ul>
      </div>
    );
  };

const Task7 = ({ products, deleteProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Назва</th>
          <th>Ціна</th>
          <th>Кількість</th>
          <th>Вартість</th>
          <th>Дія</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.price * product.quantity}</td>
            <td>
              <button onClick={() => deleteProduct(index)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

class AppTask7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: 'Продукт 1', price: 10, quantity: 2 },
        { name: 'Продукт 2', price: 20, quantity: 3 },
        { name: 'Продукт 3', price: 15, quantity: 1 },
      ],
    };
  }

  deleteProduct = (index) => {
    const updatedProducts = [...this.state.products];
    updatedProducts.splice(index, 1);
    this.setState({ products: updatedProducts });
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1>7</h1>
        <Task7 products={products} deleteProduct={this.deleteProduct} />
      </div>
    );
  }
}

const Task8 = ({ products, deleteProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Назва</th>
          <th>Ціна</th>
          <th>Кількість</th>
          <th>Вартість</th>
          <th>Дія</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.price * product.quantity}</td>
            <td>
              <button onClick={() => deleteProduct(index)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      quantity: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price, quantity } = this.state;
    const newProduct = {
      name: name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };
    this.props.addProduct(newProduct);
    this.setState({ name: '', price: '', quantity: '' });
  };

  render() {
    const { name, price, quantity } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Додати новий продукт</h4>
        <label>
          Назва:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label>
          Ціна:
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleInputChange}
            step="0.01"
            required
          />
        </label>
        <label>
          Кількість:
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleInputChange}
            step="1"
            required
          />
        </label>
        <button type="submit">Додати</button>
      </form>
    );
  }
}

class AppTask8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: 'Продукт 1', price: 10, quantity: 2 },
        { name: 'Продукт 2', price: 20, quantity: 3 },
        { name: 'Продукт 3', price: 15, quantity: 1 },
        ],
        };
        }
        
        deleteProduct = (index) => {
        const updatedProducts = [...this.state.products];
        updatedProducts.splice(index, 1);
        this.setState({ products: updatedProducts });
        };
        
        addProduct = (newProduct) => {
        const updatedProducts = [...this.state.products, newProduct];
        this.setState({ products: updatedProducts });
        };
        
        render() {
        const { products } = this.state;
        return (
            <div>
              <h1>8</h1>
              <Task8 products={products} deleteProduct={this.deleteProduct} />
              <AddForm addProduct={this.addProduct} />
            </div>
          );
        }
    }          

const Task9 = ({ products, deleteProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Назва</th>
          <th>Ціна</th>
          <th>Кількість</th>
          <th>Вартість</th>
          <th>Дія</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.price * product.quantity}</td>
            <td>
              <button onClick={() => deleteProduct(index)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TotalCost = ({ products }) => {
  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return <p>Повна вартість: {total}</p>;
};

class AddProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          price: '',
          quantity: '',
        };
      }
    
      handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { name, price, quantity } = this.state;
        const newProduct = {
          name: name,
          price: parseFloat(price),
          quantity: parseInt(quantity),
        };
        this.props.addProduct(newProduct);
        this.setState({ name: '', price: '', quantity: '' });
      };
    
      render() {
        const { name, price, quantity } = this.state;
    
        return (
          <form onSubmit={this.handleSubmit}>
            <h4>Додати новий продукт</h4>
            <label>
              Назва:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label>
              Ціна:
              <input
                type="number"
                name="price"
                value={price}
                onChange={this.handleInputChange}
                step="0.01"
                required
              />
            </label>
            <label>
              Кількість:
              <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={this.handleInputChange}
                step="1"
                required
              />
            </label>
            <button type="submit">Додати</button>
          </form>
        );
      }
}

class AppTask9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [
            { name: 'Продукт 1', price: 10, quantity: 2 },
            { name: 'Продукт 2', price: 20, quantity: 3 },
            { name: 'Продукт 3', price: 15, quantity: 1 },
            ],
            };
            }
            
            deleteProduct = (index) => {
            const updatedProducts = [...this.state.products];
            updatedProducts.splice(index, 1);
            this.setState({ products: updatedProducts });
            };
            
            addProduct = (newProduct) => {
            const updatedProducts = [...this.state.products, newProduct];
            this.setState({ products: updatedProducts });
            };

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1>9</h1>
        <Task9 products={products} deleteProduct={this.deleteProduct} />
        <AddProductForm addProduct={this.addProduct} />
        <TotalCost products={products} />
      </div>
    );
  }
}

const Task10 = ({ products, deleteProduct, handleCheckboxChange }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Назва</th>
          <th>Ціна</th>
          <th>Кількість</th>
          <th>Вартість</th>
          <th>Дія</th>
          <th>Вибір</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.price * product.quantity}</td>
            <td>
              <button onClick={() => deleteProduct(index)}>Видалити</button>
            </td>
            <td>
              <input
                type="checkbox"
                checked={product.checked}
                onChange={(event) => handleCheckboxChange(event, index)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TotalCost10 = ({ products }) => {
  const total = products.reduce(
    (acc, product) => (product.checked ? acc + product.price * product.quantity : acc),
    0
  );

  return <p>Повна вартість обраних продуктів: {total}</p>;
};

class AddProductForm10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          price: '',
          quantity: '',
        };
      }
    
      handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { name, price, quantity } = this.state;
        const newProduct = {
          name: name,
          price: parseFloat(price),
          quantity: parseInt(quantity),
        };
        this.props.addProduct(newProduct);
        this.setState({ name: '', price: '', quantity: '' });
      };
    
      render() {
        const { name, price, quantity } = this.state;
    
        return (
          <form onSubmit={this.handleSubmit}>
            <h4>Додати новий продукт</h4>
            <label>
              Назва:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label>
              Ціна:
              <input
                type="number"
                name="price"
                value={price}
                onChange={this.handleInputChange}
                step="0.01"
                required
              />
            </label>
            <label>
              Кількість:
              <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={this.handleInputChange}
                step="1"
                required
              />
            </label>
            <button type="submit">Додати</button>
          </form>
        );
      }
}

class AppTask10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [
            { name: 'Продукт 1', price: 10, quantity: 2 },
            { name: 'Продукт 2', price: 20, quantity: 3 },
            { name: 'Продукт 3', price: 15, quantity: 1 },
            ],
            };
            }
            
            deleteProduct = (index) => {
            const updatedProducts = [...this.state.products];
            updatedProducts.splice(index, 1);
            this.setState({ products: updatedProducts });
            };
            
            addProduct = (newProduct) => {
            const updatedProducts = [...this.state.products, newProduct];
            this.setState({ products: updatedProducts });
            };

  handleCheckboxChange = (event, index) => {
    const { products } = this.state;
    const updatedProducts = [...products];
    updatedProducts[index].checked = event.target.checked;
    this.setState({ products: updatedProducts });
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1>10</h1>
        <Task10
          products={products}
          deleteProduct={this.deleteProduct}
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <AddProductForm10 addProduct={this.addProduct} />
        <TotalCost10 products={products} />
      </div>
    );
  }
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <div>
            <AppTask1 />
            <AppTask2 />
            <AppTask3 />
            <AppTask4 />
            <AppTask5 />
            <AppTask6 />
            <AppTask7 />
            <AppTask8 />
            <AppTask9 />
            <AppTask10 />
        </div>
    );