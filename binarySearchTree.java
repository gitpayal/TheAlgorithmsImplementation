public class BinarySearchTree{
    public static void main(String args[]) {
        
        
        
        BST bst = new BST();
      //  bst.setData(16);
        bst.insert(15);
        bst.insert(17);
        bst.insert(18);
        bst.insert(20);
        bst.insert(19);
        System.out.println("inorder " + bst.search(17));
        
        //bst.inOrder();
        
        
    }
    
    
    
    public static class BSTNode {
    BSTNode left,right;
    int data;
    public BSTNode(){//constructor
        left = null;
        right = null;
        data =0;
    }
     public BSTNode(int n){//constructor
        left = null;
        right = null;
        data = n;
    }
    
    public void setData (int dataTemp){
        
        data = dataTemp;
         
        
    }
    public int getData (){
        return data;
        
    }
    public void setLeft (BSTNode bstNodeLeft){
        left = bstNodeLeft;
    }
    
    public BSTNode getLeft (){
        return left;
    }
    
     public void setRight (BSTNode bstNodeRight){
        left = bstNodeRight;
    }
    
    public BSTNode getRight (){
        return right;
    }
    
   

       
   }
   
   public static class BST {
        BSTNode bst;
        public void inOrder() {
        while(bst != null){
            //inOrder(bst.getLeft());
            System.out.println("nodes "+bst.getData());
            //inOrder(bst.getRight());
            
        } ;
      
        
    }
    public boolean search(int item){
        return searchBST(bst,item);
    }
    private boolean searchBST(BSTNode bst,int item){
        boolean found = false;
        
       while ((bst != null) && !found) {
          
        if(item < bst.getData()){
            System.out.println("bst.getData() left"+bst.getData());
             searchBST(bst.left,item);
           // bst = bst.getLeft();
            
        } else if(item > bst.getData()) {
             System.out.println("bst.getData() right"+bst.getData());
             searchBST(bst.right,item);
            // bst = bst.getRight();
            
            
        } else {
            found = true;
           break;

           
        }
          // found = searchBST(bst,item);
        }
     
        return found;
        
    }
    
    public void insert(int insertedNode){
        
       bst = insertBST(bst,insertedNode);
    }
    
    private BSTNode insertBST(BSTNode bst,int insertedNode)
    {
        System.out.println("bst" +insertedNode);
          if(bst == null ){
              
          bst = new BSTNode(insertedNode);
          }
          else if(insertedNode < bst.getData()) {
              insertBST(bst.getLeft(),insertedNode);
              
          }else  {
               insertBST(bst.getRight(),insertedNode);
              
          } 
          
          return bst;
    }
    
  
}
}


