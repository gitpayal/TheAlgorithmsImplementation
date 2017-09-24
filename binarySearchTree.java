/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package binarySearchTree;

/**
 *
 * @author payalverma
 */
public class binarySearchTree {
    int data;
    binarySearchTree left;
    binarySearchTree right;
  
    //search
    
    //insert
    public void insert(){
        
    }
    //delete
    //find maximum or minimum
    
    
    public binarySearchTree (int data){
        data = this.data;
        this.left = null;
        this.right = null;
    
    }
    public static void main(String[] args){
        binarySearchTree myTree = new binarySearchTree(10);
        
        myTree.insert(20);
       
        
        
    }
}
