import React from 'react';

const OrderSummary = ({ items, onSelectAll, onDeleteProduct, isAttached }) => {
  const total = items
    .filter(item => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const allSelected = items.length > 0 && items.every(item => item.selected);

  return (
    <div className='order-summary' >
      <label>
        <input 
          type="checkbox" 
          checked={allSelected} 
          onChange={(e) => onSelectAll(e.target.checked)} 
        />
        <h4>Chọn Tất cả ({items.length})</h4>
      </label>
      <div >
        <button 
            className="delete-btn" 
            onClick={() => items.forEach(item => item.selected && onDeleteProduct(item.id))}
        >
            Xóa
        </button>
        </div>
      <h4>Tổng thanh toán: {total.toLocaleString()} VNĐ</h4>
      <button className='payment' disabled={total === 0}><h3>Mua hàng</h3></button>
    </div>
  );
};

export default OrderSummary;
